const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: true }));

// rutas de app engine con express
// index
app.get("/", (req, res) => {
  res.status(200).send("ruta de inicio");
});

// /get
app.get("/get", (req, res) => {
  res.status(200).send("peticion get");
});

// levatar servicio en puerto 8080
console.log(`Server start on port ${process.env.PORT || "8080"}`);
app.listen(process.env.PORT || 8080);
