const Curso = require('../models/curso');

exports.crearCurso = async (req, res) => {
  try {
    const curso = new Curso(req.body);
    await curso.save();
    res.status(201).json(curso);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

exports.listarCursos = async (req, res) => {
  try {
    const cursos = await Curso.find();
    res.json(cursos);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};