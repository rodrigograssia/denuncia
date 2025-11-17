import React, { useEffect, useState } from 'react';
import Topbar from '../components/TopBar';
import Footer from '../components/Footer';
import Botao from '../components/Botao';
import axios from 'axios';

function MinhasDenuncias() {
    const [denuncias, setDenuncias] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('Você precisa estar logado para ver suas denúncias.');
                window.location.href = '/login';
                return;
            }

            setLoading(true);
            setError(null);
            try {
                // Obter usuário atual
                const meRes = await axios.get('http://localhost:8080/usuario/me', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const usuario = meRes.data;

                // Buscar todas as denúncias e filtrar por idUsuario
                const denRes = await axios.get('http://localhost:8081/denuncia/listar', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                const all = Array.isArray(denRes.data) ? denRes.data : [];
                const minhas = all.filter(d => d.idUsuario === usuario.idUsuario);
                setDenuncias(minhas);
            } catch (err) {
                console.error('Erro ao carregar denúncias:', err?.response?.data || err.message);
                if (err?.response?.status === 401) {
                    localStorage.removeItem('token');
                    alert('Sessão expirada. Faça login novamente.');
                    window.location.href = '/login';
                } else {
                    setError('Não foi possível carregar suas denúncias. Tente novamente mais tarde.');
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

            <div className="flex-1 flex flex-col pt-6 pb-20 md:pt-8 w-full px-4 md:px-8 items-center">
                <Botao variant="back" to="/">Voltar</Botao>

                <h1 className="dark:text-white font-bold text-xl sm:text-3xl text-center mb-6">Minhas Denúncias</h1>

                <div className="w-full max-w-[800px]">
                    {loading && (
                        <div className="bg-white dark:bg-neutral-900 rounded-lg border p-6 shadow-xl text-center">Carregando suas denúncias...</div>
                    )}

                    {error && (
                        <div className="bg-white dark:bg-neutral-900 rounded-lg border p-6 shadow-xl text-center text-red-600">{error}</div>
                    )}

                    {!loading && !error && denuncias.length === 0 && (
                        <div className="bg-white dark:bg-neutral-900 rounded-lg border border-gray-300 dark:border-neutral-600 p-6 shadow-xl">
                            <p className="text-gray-600 dark:text-gray-300">Ainda não há denúncias.</p>
                        </div>
                    )}

                    {!loading && !error && denuncias.length > 0 && (
                        <div className="space-y-4 w-full">
                            {denuncias.map(d => (
                                <div key={d.idDenuncia} className="bg-white dark:bg-neutral-900 rounded-lg border border-gray-300 dark:border-neutral-600 p-4 shadow">
                                    <h2 className="font-bold text-lg dark:text-white">{d.titulo}</h2>
                                    <p className="text-sm text-gray-500">Categoria: {d.categoria}</p>
                                    {d.nomeEmpresa && <p className="text-sm">Empresa: {d.nomeEmpresa}</p>}
                                    {d.descricao && <p className="mt-2 text-gray-700 dark:text-gray-300">{d.descricao}</p>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
}
export default MinhasDenuncias;