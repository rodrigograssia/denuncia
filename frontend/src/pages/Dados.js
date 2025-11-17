import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Label from '../components/Label';
import CampoTexto from '../components/Campos';
import CampoSenha from '../components/CampoSenha';
import Botao from '../components/Botao';
import Topbar from '../components/TopBar';
import Footer from '../components/Footer';

// Normaliza CPF (remove qualquer caractere que não seja dígito)
function normalizeCpf(cpf) {
    return (cpf || '').replace(/\D/g, '');
}

// Normaliza telefone para dígitos apenas (ex: (11) 98765-4321 -> 11987654321)
function normalizePhone(phone) {
    return (phone || '').replace(/\D/g, '');
}

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
            if (err?.response?.status === 401) {
                // token inválido ou expirado
                localStorage.removeItem('token');
                navigate('/login');
            } else {
                alert('Não foi possível carregar seus dados. Faça login novamente.');
            }
        });
    }, [navigate]);

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
                telefoneUsuario: normalizePhone(telefone),
                senhaUsuario: senha,
                cpfUsuario: normalizeCpf(cpf)
            };

            const res = await axios.put(`http://localhost:8080/usuario/${id}`, body, {
                headers: { Authorization: token ? `Bearer ${token}` : '' }
            });

            if (res && res.data) {
                const u = res.data;
                setNome(u.nomeUsuario || '');
                setEmail(u.emailUsuario || '');
                setTelefone(u.telefoneUsuario || '');
                setCpf(u.cpfUsuario || '');
                setSenha('');
                alert('Dados atualizados com sucesso.');
            }
        } catch (error) {
            console.error('Erro ao atualizar:', error?.response?.data || error.message);
            const msg = error?.response?.data?.error || 'Erro ao atualizar dados. Tente novamente mais tarde.';
            alert(msg);
        }
    };

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

            localStorage.removeItem('token');
            alert('Conta excluída com sucesso.');
            navigate('/');
        } catch (error) {
            console.error('Erro ao excluir conta:', error?.response?.data || error.message);
            const msg = error?.response?.data?.error || 'Erro ao excluir conta. Tente novamente mais tarde.';
            alert(msg);
        }
    };

    return (
        <div className="m-0 p-0 min-h-screen dark:bg-neutral-800 flex flex-col">
            <header><Topbar/></header>

            <div className="flex-1 flex flex-col pt-6 pb-20 md:pt-8 w-full px-4 md:px-8 items-center">
                <Botao variant="back" to="/">Voltar</Botao>
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

            <Footer />
        </div>
    );
}
export default Dados;