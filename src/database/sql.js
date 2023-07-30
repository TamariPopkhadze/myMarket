import pgk from "pg";

const { Pool } = pgk;

const pool = new Pool({
  host: process.env.db_host,
  port: process.env.db_port,
  database: process.env.db_database,
  user: process.env.db_user,
  password: process.env.db_password,
});
const createTable = async () => {
  await pool.query(`CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        balance NUMERIC NOT NULL DEFAULT 0,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        userType TEXT NOT NULL,
        createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updatedAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        deletedAt TIMESTAMPTZ,
        isAdmin BOOLEAN NOT NULL DEFAULT false`);

  await pool.query(`
        CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT,
            price NUMERIC NOT NULL,
            soldAt TIMESTAMPTZ,
            createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            updatedAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            deletedAt TIMESTAMPTZ,
            userId INTEGER REFERENCES users(id) ON DELETE CASCADE,
            typeId INTEGER REFERENCES product_types(id)
        );
    `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS product_types (
        id SERIAL PRIMARY KEY,
        name TEXT UNIQUE NOT NULL
    );
`);
  await pool.query(`
CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    sellerId INTEGER REFERENCES users(id) ON DELETE CASCADE,
    buyerId INTEGER REFERENCES users(id) ON DELETE CASCADE,
    productId INTEGER REFERENCES products(id) ON DELETE CASCADE,
    price NUMERIC NOT NULL,
    createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
`);

};
 
export default createTable
