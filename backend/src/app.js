import express from "express";
import cors from "cors";
import morgan from "morgan";

import tasksRoutes from "./routes/tasks";

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { options } from "./swaggerOptions";

const app = express();
const specs = swaggerJSDoc(options);

app.set("port", 3000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(tasksRoutes);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));


export default app;