const functions = require('firebase-functions');

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: true }));

// ruta de la funcion http
app.get("/inicio", (req, res) => {
   res.status(200).send("Inicio de app");
});
//
// levantar servicio de rutas en cloud functions 
exports.app = functions.https.onRequest(app);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions


//exports.helloWorld = functions.https.onRequest((req, res) => {
//  res.send("Hello from Firebase!");
//});
