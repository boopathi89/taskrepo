import express from "express";
import bodyParser from "body-parser";
import { Routes } from "./routes";
import helmet from "helmet";
import cors from "cors";
import * as path from "path";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(express.static('../uploads'));
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
let routePrv: Routes = new Routes();
routePrv.routes(app);
export default app;
