import { Express } from "express";
import dbConnect from "../config/dbConnect"

const startServer = async (app: Express, port: string | number): Promise<void> => {
  try {
    await dbConnect()
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (error) {
    console.log("Error while starting server:", error);
    process.exit(1);
  }
};

export default startServer;