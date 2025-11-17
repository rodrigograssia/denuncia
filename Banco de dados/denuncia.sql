CREATE DATABASE IF NOT EXISTS denuncia;
USE denuncia;

-- Criação da tabela principal de usuários
CREATE TABLE IF NOT EXISTS usuario (
  idUsuario INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(30) NOT NULL,
  senha VARCHAR(30) NOT NULL,
  nomeUsuario VARCHAR(30) NOT NULL,
  telefone VARCHAR(14) NOT NULL,
  cpf VARCHAR(14) NULL UNIQUE
);

-- Tabela de administradores, que são um tipo de usuário
CREATE TABLE IF NOT EXISTS admin (
  idAdmin INT PRIMARY KEY AUTO_INCREMENT,
  idUsuario INT NOT NULL REFERENCES usuario(idUsuario)
    ON DELETE CASCADE 
    ON UPDATE CASCADE
);

-- Tabela de denúncias, feitas por um usuário
CREATE TABLE IF NOT EXISTS denuncia (
  idDenuncia INT PRIMARY KEY AUTO_INCREMENT,
  idUsuario INT NOT NULL REFERENCES usuario(idUsuario)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  titulo VARCHAR(30) NOT NULL,
  categoria VARCHAR(30) NULL,
  descricao VARCHAR(150) NULL
);