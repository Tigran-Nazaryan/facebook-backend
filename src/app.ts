import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import {corsOptions} from "./config/corsOptions";
import router from "./routes";
import startServer from "./utils/startServer";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("api", router)

startServer(app, port);