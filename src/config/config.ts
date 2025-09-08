import dbConfig from "./index";

type SequelizeConfig = {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: "postgres";
};

const config: Record<string, SequelizeConfig> = {
  "development": {
    "username": dbConfig.user,
    "password": dbConfig.password,
    "database": dbConfig.database,
    "host": dbConfig.host,
    "dialect": dbConfig.dialect as "postgres"
  },
  "test": {
    "username": "root",
    "password": "",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": "",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}

export default config;