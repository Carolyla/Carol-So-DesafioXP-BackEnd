const express = require('express');
const ativosController = require('../controllers/ativos.controller');

const router = express.Router();

router.get('/ativos', ativosController);

module.exports = router;