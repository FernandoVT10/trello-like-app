import express from "express";
import apiRoutes from "./api";
import bodyParser from "body-parser";

import errorHandler from "./middlewares/errorHandler";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", apiRoutes);

app.use(errorHandler);

export default app;
