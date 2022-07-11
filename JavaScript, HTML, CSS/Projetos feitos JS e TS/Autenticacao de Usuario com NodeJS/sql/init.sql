    -- NÃO passar apenas user Porque muitos Banco de Dados já tem a Tabela de user(s) como Default !! 
    -- uuid =  Identificador Único Universal !!!

CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; -- Extensão para Funcionar o uuid_generate !!
CREATE EXTENSION IF NOT EXISTS "pgcrypto"; -- Extensão para Funcionar o crypt !!

CREATE TABLE IF NOT EXISTS application_user(

        -- uuid + Tipo uuid + Default nome...
    uuid uuid DEFAULT uuid_generate_v4(), -- esse uuid_generate serve para Criar um Hash para CADA Id !!
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY(uuid) -- A Chave Primária ( PK ) vai ser o uuid !!
)

    -- Adicionando um Usuário INICIAL no Banco de Dados !!
    -- OBS: Colocando na Tabela application_user o Nome e a Senha, com os Valores user - admin, senha - primaryadmin1

                                                                -- crypt = Criptografa uma Senha ('senha', 'Criptografia') !!
INSERT INTO application_user (username, password) VALUES ('admin', crypt('primaryadmin1', 'md5')); -- ACHO que esse NAO Criptografou !
INSERT INTO application_user (username, password) VALUES ('pedro', crypt('amogatos123', gen_salt('md5'))); -- ACHO que esse CRIPTOGRAFOU !! <<