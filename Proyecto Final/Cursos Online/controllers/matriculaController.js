const Matricula = require('../models/matricula');

exports.matricularEstudiante = async (req, res) => {
  try {
    const { estudianteId, cursoId } = req.body;
    const existe = await Matricula.findOne({ estudianteId, cursoId });
    if (existe) return res.status(400).json({ error: 'Estudiante ya matriculado' });
    const matricula = new Matricula({
      estudianteId,
      cursoId,
      progreso: {
        leccionesCompletadas: [],
        porcentajeAvance: 0,
        calificacionFinal: null,
      },
      completado: false,
    });
    await matricula.save();
    res.status(201).json(matricula);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};