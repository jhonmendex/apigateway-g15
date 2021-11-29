import { suma, resta } from "./operaciones.mjs";
import express from "express";

console.log("la suma es " + suma(1, 2));
console.log("la resta es " + resta(1, 2));

const app = express();

app.get("/suma/:numero1", (req, res) => {
  let numero1 = req.params.numero1;
  res.send("la suma es " + suma(numero1, 2));
});

app.get("/estudiantes", (req, res) => {
  res.json({ nombre: "jhon" });
});

app.get("/resta", (req, res) => {
  res.send("la suma es " + resta(1, 2));
});

const PORT = 5000;
app.listen(PORT, () => console.log("servidor encendido"));
