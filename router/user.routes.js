const express = require("express");
const {  listaBromas, buscarBromas, crearBromas, actualizarBromas, eliminarBroma} = require("../controllers/mongoose.controller");
const Joker = require("../models/user.models");
const app = express();

app.get("/api/bromas/", listaBromas);
app.post("/api/bromas/" , crearBromas)
app.get("/api/bromas/buscar/:id", buscarBromas);
app.put("/api/bromas/:id", actualizarBromas);
app.delete("/api/bromas/:id", eliminarBroma)




module.exports = app;