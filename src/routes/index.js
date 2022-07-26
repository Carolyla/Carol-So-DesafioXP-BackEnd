const express = require('express');
const ativoClienteController = require('../controllers/ativoCliente.controller');
const ativosController = require('../controllers/ativos.controller');
const getAtiveById = require('../controllers/ativosId.controller');
const clienteIdController = require('../controllers/clienteId.controller');
const getClientesController = require('../controllers/clientes.controller');

const router = express.Router();

router.get('/ativos', ativosController);
router.get('/ativos/:id', getAtiveById);
router.get('/clientes/ativos/:id', ativoClienteController);
router.get('/clientes', getClientesController)
router.get('/clientes/conta/:id', clienteIdController )

module.exports = router;