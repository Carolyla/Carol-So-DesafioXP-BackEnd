const express = require('express');
const ativosController = require('../controllers/ativos.controller');
const getAtiveById = require('../controllers/ativosId.controller');

const router = express.Router();

router.get('/ativos', ativosController);
router.get('/ativos/:id', getAtiveById)

module.exports = router;