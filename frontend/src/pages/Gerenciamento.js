import React, { useEffect, useState } from 'react';
import Topbar from '../components/TopBar';
import Footer from '../components/Footer';
import Botao from '../components/Botao';
import axios from 'axios';

function Gerenciamento() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState([]);
    const [denuncias, setDenuncias] = useState([]);
    const [showUsers, setShowUsers] = useState(false);
    const [showDenuncias, setShowDenuncias] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('Você precisa estar logado como admin para acessar esta página.');
                window.location.href = '/login';
                return;
            }

            setLoading(true);
            setError(null);

            try {
                // 1) verificar usuário atual e role
                const me = await axios.get('http://localhost:8080/usuario/me', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                if (!me?.data || me.data.role !== 'ADMIN') {
                    alert('Acesso negado: esta área é exclusiva para administradores.');
                    window.location.href = '/';
                    return;
                }

                // 2) buscar todos os usuários
                const usersRes = await axios.get('http://localhost:8080/usuario/listagem', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const allUsers = Array.isArray(usersRes.data) ? usersRes.data : [];

                // 3) buscar todas as denuncias
                const denRes = await axios.get('http://localhost:8081/denuncia/listar', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const allDen = Array.isArray(denRes.data) ? denRes.data : [];

                // 4) contar por idUsuario e atualizar users
                const usersWithCounts = allUsers.map(u => ({
                    ...u,
                    complaintCount: allDen.filter(d => d.idUsuario === u.idUsuario).length
                }));

                setUsers(usersWithCounts);
                setDenuncias(allDen);
            } catch (err) {
                console.error('Erro ao carregar dados de gerenciamento:', err?.response?.data || err.message);
                if (err?.response?.status === 401) {
                    localStorage.removeItem('token');
                    window.location.href = '/login';
                } else {
                    setError('Erro ao carregar dados. Tente novamente mais tarde.');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="m-0 p-0 min-h-screen dark:bg-neutral-800 flex flex-col">
            <header><Topbar/></header>

            <main className="flex-1 flex flex-col pt-6 pb-20 px-4 md:pt-8 md:px-8 w-full items-center">
                <Botao variant="back" to="/">Voltar</Botao>
                <div className="w-full max-w-7xl mx-auto">
                    <h1 className="dark:text-white font-bold text-xl sm:text-3xl text-center mb-6">Gerenciamento da Plataforma</h1>

                    {loading && <div className="text-center">Carregando...</div>}
                    {error && <div className="text-center text-red-600">{error}</div>}

                    <div className="flex gap-4 justify-center mb-6">
                        <button
                            className={`px-4 py-2 rounded transition transform duration-150 cursor-pointer ${showUsers ? 'bg-blue-600 text-white' : 'bg-white dark:bg-neutral-900'} hover:shadow-md hover:scale-105`}
                            onClick={() => { setShowUsers(true); setShowDenuncias(false); }}
                        >
                            Ver lista de usuários
                        </button>
                        <button
                            className={`px-4 py-2 rounded transition transform duration-150 cursor-pointer ${showDenuncias ? 'bg-blue-600 text-white' : 'bg-white dark:bg-neutral-900'} hover:shadow-md hover:scale-105`}
                            onClick={() => { setShowDenuncias(true); setShowUsers(false); }}
                        >
                            Ver lista de reclamações
                        </button>
                    </div>

                    {showUsers && (
                        <div className="overflow-x-auto w-full">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                <thead className="bg-gray-50 dark:bg-neutral-900">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefone</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CPF</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nº de Denúncias</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-neutral-800 divide-y divide-gray-200 dark:divide-neutral-700">
                                    {users.map(u => (
                                        <tr key={u.idUsuario}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{u.idUsuario}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{u.nomeUsuario}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{u.emailUsuario}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{u.telefoneUsuario}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{u.cpfUsuario}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">{u.complaintCount}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <button
                                                    className="text-red-600 hover:text-red-800 transition hover:underline cursor-pointer"
                                                    onClick={async () => {
                                                        if (!window.confirm('Confirma excluir este usuário? Esta ação é irreversível.')) return;
                                                        try {
                                                            const token = localStorage.getItem('token');
                                                            await axios.delete(`http://localhost:8080/usuario/${u.idUsuario}`, {
                                                                headers: { Authorization: `Bearer ${token}` }
                                                            });
                                                            // remover da lista
                                                            setUsers(prev => prev.filter(x => x.idUsuario !== u.idUsuario));
                                                            alert('Usuário removido.');
                                                        } catch (err) {
                                                            console.error('Erro ao excluir usuário', err?.response?.data || err.message);
                                                            if (err?.response?.status === 401) {
                                                                localStorage.removeItem('token');
                                                                alert('Sessão expirada. Faça login novamente.');
                                                                window.location.href = '/login';
                                                            } else if (err?.response?.status === 403) {
                                                                alert('Acesso negado. Você não tem permissão para excluir usuários.');
                                                            } else {
                                                                alert('Erro ao excluir usuário. Tente novamente mais tarde.');
                                                            }
                                                        }
                                                    }}
                                                >Excluir</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {showDenuncias && (
                        <div className="space-y-4 w-full">
                            {denuncias.length === 0 && (
                                <div className="bg-white dark:bg-neutral-900 rounded-lg border p-6 shadow-xl text-center">Nenhuma reclamação encontrada.</div>
                            )}
                            {denuncias.map(d => (
                                <div key={d.idDenuncia} className="bg-white dark:bg-neutral-900 rounded-lg border border-gray-300 dark:border-neutral-600 p-4 shadow">
                                    <h2 className="font-bold text-lg dark:text-white">{d.titulo}</h2>
                                    <p className="text-sm text-gray-500">Categoria: {d.categoria}</p>
                                    {d.nomeEmpresa && <p className="text-sm">Empresa: {d.nomeEmpresa}</p>}
                                    {d.descricao && <p className="mt-2 text-gray-700 dark:text-gray-300">{d.descricao}</p>}
                                    <p className="mt-2 text-xs text-gray-400">Usuário ID: {d.idUsuario}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Gerenciamento;