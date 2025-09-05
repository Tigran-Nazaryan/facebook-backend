import { Express } from "express";

const startServer = async (app: Express, port: string | number): Promise<void> => {
  try {
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (error) {
    console.log("Error while starting server:", error);
    process.exit(1);
  }
};

export default startServer;