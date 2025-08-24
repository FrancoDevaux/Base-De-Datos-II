const mongoose = require('mongoose');
async function conectar() {
  try {
    await mongoose.connect('mongodb://localhost:27017/plataformaCursos', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error conectandose a MongoDB:', error);
  }
}
module.exports = { conectar };
