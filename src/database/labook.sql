-- Active: 1692035360480@@127.0.0.1@3306
-- Queries da tabela user
CREATE TABLE
    users (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT NOT NULL,
        created_at TEXT DEFAULT (DATETIME()) NOT NULL
    );

INSERT INTO
    users (id, name, email, password, role)
VALUES (
        'u001',
        'Saulo Silva',
        'saulo@email.com',
        '$2a$12$LPljUor1LmJ8/OkT4ixz9uxjVDpJS.F.6tUDsuBXRM7iDmyLuvsfK',
        'NORMAL'
    ), (
        'u002',
        'Jordan Dias',
        'jordan@email.com',
        '$2a$12$uDSf0hxNRZ.nkt0mYTooheT2pgHBzVA902elNg5Shx40B/wb0ve1q',
        'NORMAL'
    ), (
        'u003',
        'Ana Luiza',
        'luiza@email.com',
        '$2a$12$DyXQLgViShLjqColB/y3cO87bq7lFE1Zfgt9UmsBKa032qhfN/ZsO',
        'ADMIN'
    ), (
        'u004',
        'Camila Durtra',
        'camila@email.com',
        '$2a$12$stwZ7yTpp6IWb93WeAT0i.aSKjyyAimu81Oi4rSr6ufrhYCve996.',
        'NORMAL'
    );
    -- Queries da tabela posts



--Queries da tabela posts
CREATE TABLE
    posts (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        creator_id TEXT UNIQUE NOT NULL,
        content TEXT NOT NULL,
        likes INTEGER DEFAULT (0) NOT NULL,
        dislikes INTEGER DEFAULT (0) NOT NULL,
        created_at TEXT DEFAULT (DATETIME()) NOT NULL,
        updated_at TEXT DEFAULT (DATETIME()) NOT NULL,
        FOREIGN KEY (creator_id) REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE
    );

INSERT INTO
    posts (id, creator_id, content)
VALUES (
        'p001',
        'u001',
        'Bom dia, uma boa semana a todos!'
    ), (
        'p002',
        'u002',
        'Oie amigos do meu feed, olha essa receita :)'
    ), (
        'p003',
        'u003',
        'Obrigado a todos que deixaram votos de boas festas!'
    ), (
        'p004',
        'u004',
        'Muito boa a nova musica do Sesto Sento'
    );




--Queries da tabela likes_dislikes
CREATE TABLE
    likes_dislikes (
        user_id TEXT NOT NULL,
        post_id TEXT NOT NULL,
        like INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (post_id) REFERENCES posts (id) ON UPDATE CASCADE ON DELETE CASCADE
    );

INSERT INTO
    likes_dislikes (user_id, post_id, like)
VALUES ('u002', 'p001', 1), ('u003', 'p001', 1), ('u001', 'p002', 1), ('u003', 'p002', 0);