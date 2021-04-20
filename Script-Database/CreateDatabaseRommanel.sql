CREATE DATABASE rommanel_bd

CREATE TABLE usr_registro (
	id INT IDENTITY(1,1) PRIMARY KEY,
	nome			VARCHAR (150)	NOT NULL,
	cpf_cnpj		VARCHAR (20)	NOT NULL,
	data_nascimento VARCHAR (15)	NOT NULL,
	contato			VARCHAR (100)	NOT NULL,
	email			VARCHAR (100)	NOT NULL,
	);

CREATE TABLE usr_endereco (
	id INT IDENTITY(1,1) PRIMARY KEY,
	id_registro INT,
	cep		VARCHAR		(20)	NOT NULL,
	rua		VARCHAR		(100)	NOT NULL,
	numero	VARCHAR		(10)	NOT NULL,
	bairro	VARCHAR		(100)	NOT NULL,
	cidade	VARCHAR		(100)	NOT NULL,
	estado	VARCHAR		(100)	NOT NULL

	CONSTRAINT FK_Registro_Usuario	FOREIGN KEY (id_registro)	REFERENCES usr_registro(id),
	);