import express from "express";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("๐๐งServer is running!๐ง๐"));
