import dotenv from 'dotenv';
dotenv.config();

const dbConfig = {
    user: process.env.DATABASE_USER ?? "user",
    host: process.env.DATABASE_HOST ?? "localhost",
    port: Number(process.env.DATABASE_PORT) || 5432,
    password: process.env.DATABASE_PASSWORD ?? "",
    database: process.env.DATABASE_NAME ?? "user",
    dialect: "postgres",
};


export default dbConfig;