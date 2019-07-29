const express = require("express");
const cors = require("cors");
//coneccion a una base de datos dentro de firestore
const db = require("./lib/firestore");

const app = express();

app.use(cors({ origin: true }));

// en esta ruta de firestore se iran todos los valores que agreguemos cpor get dentro de set
const collection = db.collection("demoUtn").doc("mensajes");

// rutas de app engine con express
// Ruta inicial
app.get("/", (req, res) => {
  res.send("Ruta inicial");
});

// cargar datos por peticion get 
app.get("/set", (req, res) => {
  const value = req.query.valor || null;
  collection.set({
   valor: value
  });
  res.status(200).send("ruta de inicio");
});

// /get
app.get("/get", (req, res) => {
  collection.get()
    .then((doc) => {
	if (doc.exists) {
	  const result = JSON.stringify(doc.data());
	  console.log(result);
	  res.status(200).send("revisar en el log");
	}
	else 
	  res.status(200).send("Sin datos");
    })
    .catch(err => {
	console.log(err);
	res.status(200).send(err);
    });
  res.status(200).send(db);
});

// levatar servicio en puerto 8080
console.log(`Server start on port ${process.env.PORT || "8080"}`);
app.listen(process.env.PORT || 8080);
