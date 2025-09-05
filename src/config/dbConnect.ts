import db from "../models/index.ts";

const dbConnect = async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Connected to PostgreSQL successfully.');
  } catch (error) {
    console.error('Failed to connect to the database:', error.message);
    throw error;
  }
};

export default dbConnect;

