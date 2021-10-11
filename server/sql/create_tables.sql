-- Table: categories

CREATE TABLE IF NOT EXISTS categories
(
    id serial NOT NULL,
    label character varying COLLATE pg_catalog."default" NOT NULL,
    type character varying COLLATE pg_catalog."default" NOT NULL,
    image character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT categories_pkey PRIMARY KEY (id),
    CONSTRAINT label_unique UNIQUE (label)
);

-- Table: transactions

CREATE TABLE IF NOT EXISTS transactions
(
    id serial NOT NULL,
    amount integer NOT NULL,
    date timestamp without time zone NOT NULL,
    fk_category_id integer NOT NULL,
    CONSTRAINT transactions_pkey PRIMARY KEY (id),
    CONSTRAINT fk_category_id FOREIGN KEY (fk_category_id)
        REFERENCES categories (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);
