import { Sequelize, DataTypes, Model, ModelStatic } from 'sequelize';
import { readdirSync } from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';

import config from '../config/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  }
);

type DbModels = {
  [key: string]: ModelStatic<Model> & {
    associate?: (db: Db) => void;
  };
};

type Db = DbModels & {
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
};

const db: Db = {} as Db;

const modelsPath = join(__dirname);
const modelFiles = readdirSync(modelsPath).filter(
  (file) => file.endsWith('.ts') && file !== 'index.ts' && file !== 'models.ts'
);

for (const file of modelFiles) {
  const modelUrl = pathToFileURL(join(modelsPath, file)).href;
  const modelModule = await import(modelUrl);
  const model = modelModule.default(sequelize, DataTypes);
  db[model.name] = model;
}

Object.keys(db).forEach((modelName) => {
  const model = db[modelName];
  if (model?.associate) {
    model.associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
