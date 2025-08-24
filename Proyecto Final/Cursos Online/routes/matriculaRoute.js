const express = require('express');
const router = express.Router();
const matriculaController = require('../controllers/matriculaController');
router.post('/', matriculaController.matricularEstudiante);
module.exports = router;