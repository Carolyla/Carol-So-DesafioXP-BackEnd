const getClientesService = require('../Services/cliente.service');

const getClientesController = async (_req, res) => {
    const clientes = await getClientesService()
    return res.status(200).json(clientes)
};
 
module.exports = getClientesController