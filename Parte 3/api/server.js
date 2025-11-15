const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ mensaje: "API funcionando", db: process.env.DB_HOST });
});

app.get("/salud", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`API iniciada en puerto ${PORT}`);
});
