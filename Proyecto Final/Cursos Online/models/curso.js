const mongoose = require('mongoose');

const moduloSchema = new mongoose.Schema({
  nombre: String,
  lecciones: [String],
});

const cursoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  instructor: String,
  duracionHoras: Number,
  precio: Number,
  modulos: [moduloSchema],
});
module.exports = mongoose.model('Curso', cursoSchema);
