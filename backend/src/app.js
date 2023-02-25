import express from "express";
import tasksRoutes from "./routes/tasks";

const app = express();

app.use(tasksRoutes)


export default app;