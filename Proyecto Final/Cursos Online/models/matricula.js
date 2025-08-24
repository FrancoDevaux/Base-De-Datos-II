const mongoose = require('mongoose');

const progresoSchema = new mongoose.Schema({
  leccionesCompletadas: [String],
  porcentajeAvance: Number,
  calificacionFinal: { type: Number, default: null },
});

const matriculaSchema = new mongoose.Schema({
  estudianteId: { type: mongoose.Schema.Types.ObjectId, required: true },
  cursoId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Curso' },
  fechaMatricula: { type: Date, default: Date.now },
  progreso: progresoSchema,
  completado: { type: Boolean, default: false },
});
module.exports = mongoose.model('Matricula', matriculaSchema);
