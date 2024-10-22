import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import indexRoutes from './router/index.js'

const app = express();

const __dirmane = dirname(fileURLToPath(import.meta.url));

app.set("views", join(__dirmane, "views"));
app.set("view engine", "ejs");

app.use(indexRoutes);

app.use(express.static(join(__dirmane,'public')))

app.listen(3000);
console.log("El server se esta iniciando en http://localhost:3000");
