const express = require('express');
const app = express();
const { conectar } = require('./db');
const cursoRoutes = require('./routes/cursoRoutes');
const matriculaRoutes = require('./routes/matriculaRoutes');
app.use(express.json());
app.use('/cursos', cursoRoutes);
app.use('/matriculas', matriculaRoutes);
const PORT = 3000;
async function main() {
  await conectar();
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}
main();