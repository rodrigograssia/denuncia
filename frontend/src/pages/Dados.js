import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topbar from '../components/TopBar';
import LinksFooter from '../components/LinksFooter';
import axios from 'axios';
import Label from '../components/Label';
import CampoTexto from '../components/Campos';
import CampoSenha from '../components/CampoSenha';
import Botao from '../components/Botao';

function Dados() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState(null);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setLoading(false);
            return;
        }

        axios.get('http://localhost:8080/usuario/me', {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => {
            const u = res.data;
            setId(u.idUsuario || u.id || null);
            setNome(u.nomeUsuario || '');
            setEmail(u.emailUsuario || '');
            setTelefone(u.telefoneUsuario || '');
            setCpf(u.cpfUsuario || '');
            setLoading(false);
        })
        .catch(err => {
            console.error('Erro ao buscar usuário:', err?.response?.data || err.message);
            setLoading(false);
            alert('Não foi possível carregar seus dados. Faça login novamente.');
        });
    }, []);

    const handleUpdate = async () => {
        if (!id) {
            alert('Usuário não identificado. Faça login por favor.');
            return;
        }

        const token = localStorage.getItem('token');
        try {
            const body = {
                idUsuario: id,
                nomeUsuario: nome,
                emailUsuario: email,
                telefoneUsuario: telefone,
                senhaUsuario: senha,
                cpfUsuario: cpf
            };

            const res = await axios.put(`http://localhost:8080/usuario/${id}`, body, {
                headers: { Authorization: token ? `Bearer ${token}` : '' }
            });

            if (res && res.data) {
                const u = res.data;
                setNome(u.nomeUsuario || nome);
                setEmail(u.emailUsuario || email);
                setTelefone(u.telefoneUsuario || telefone);
                setCpf(u.cpfUsuario || cpf);
                setSenha('');
            }
            window.location.reload();
        } catch (error) {
            console.error('Erro ao atualizar:', error?.response?.data || error.message);
            const msg = error?.response?.data?.error || 'Erro ao atualizar dados. Veja o console para detalhes.';
            alert(msg);
        }
    };

    // Deleta a conta do usuário autenticado
    const handleDelete = async () => {
        if (!id) {
            alert('Usuário não identificado. Faça login novamente.');
            return;
        }

        const confirmDelete = window.confirm('Tem certeza que deseja excluir sua conta? Essa ação não pode ser desfeita.');
        if (!confirmDelete) return;

        const token = localStorage.getItem('token');
        try {
            await axios.delete(`http://localhost:8080/usuario/${id}`, {
                headers: { Authorization: token ? `Bearer ${token}` : '' }
            });

            // Limpa token e redireciona para a home
            localStorage.removeItem('token');
            alert('Conta excluída com sucesso.');
            navigate('/');
        } catch (error) {
            console.error('Erro ao excluir conta:', error?.response?.data || error.message);
            const msg = error?.response?.data?.error || 'Erro ao excluir conta. Veja o console para detalhes.';
            alert(msg);
        }
    };

    return (
        <div className="m-0 p-0 min-h-screen dark:bg-neutral-800 flex flex-col">
            <header><Topbar/></header>

            <div className="flex-grow flex flex-col items-center pt-20 pb-28">
                <h1 className="dark:text-white font-bold text-xl sm:text-3xl text-center mb-6">Meus Dados</h1>

                <div className="w-full max-w-[640px] bg-white dark:bg-neutral-900 rounded-lg border border-gray-300 dark:border-neutral-600 p-6 shadow-xl">
                    {loading ? (
                        <p className="text-gray-600 dark:text-gray-300">Carregando...</p>
                    ) : (
                        <div className="flex flex-col gap-4">
                            <div>
                                <Label>Nome</Label>
                                <CampoTexto value={nome} onChange={e => setNome(e.target.value)} />
                            </div>

                            <div>
                                <Label>E-mail</Label>
                                <CampoTexto value={email} onChange={e => setEmail(e.target.value)} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label>Telefone</Label>
                                        <CampoTexto value={telefone} mask="phone" onChange={e => setTelefone(e.target.value)} />
                                </div>
                                <div>
                                    <Label>CPF</Label>
                                    <CampoTexto value={cpf} mask="cpf" onChange={e => setCpf(e.target.value)} />
                                </div>
                            </div>

                            <div>
                                <Label>Senha (deixe em branco para não alterar)</Label>
                                <CampoSenha value={senha} onChange={e => setSenha(e.target.value)} />
                            </div>

                            <div className="flex flex-row gap-4 pt-3">
                                <Botao variant="cancel" className="w-full text-red-600 dark:text-red-600 border-red-600 hover:bg-red-50 dark:border-red-600 dark:hover:bg-neutral-800" onClick={handleDelete}>
                                    Excluir conta
                                </Botao>
                                <Botao variant="confirm" className="w-full" onClick={handleUpdate}>
                                    Salvar
                                </Botao>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <footer className="fixed bottom-0 left-0 w-full bg-[#eeeeee] dark:bg-neutral-900 py-4 px-4 md:py-5 md:px-8 z-50">
                <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-4">
                    <LinksFooter />
                    <p className="text-black dark:text-white text-xs sm:text-sm md:text-base text-center md:text-right leading-tight">© 2025 denunc.ia – Todos os direitos reservados</p>
                </div>
            </footer>
        </div>
    );
}
export default Dados;