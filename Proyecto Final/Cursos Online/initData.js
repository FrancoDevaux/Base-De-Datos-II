const { conectar } = require('../db');
const Curso = require('./models/curso');
const mongoose = require('mongoose');

async function init() {
  await conectar();

  await Curso.deleteMany({}); 

  const cursoEjemplo = new Curso({
    nombre: "Full-Stack (Avanzado)",
    descripcion: "Curso completo si queres convertirte en desarrollador Full-Stack",
    instructor: "Franco Devaux y Eros Perrone",
    duracionHoras: 40,
    precio: 100,
    modulos: [
      {
        nombre: "Módulo 1: Frontend",
        lecciones: ["Html", "Css", "JavaScript"]
      },
      {
        nombre: "Módulo 2: Backend",
        lecciones: ["MongoDB", "Python", "APIs"]
      }
    ]
  });

  await cursoEjemplo.save();
  console.log("Curso inicializado:", cursoEjemplo);

  mongoose.connection.close();
}

init();
