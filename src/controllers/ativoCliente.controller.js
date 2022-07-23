const ativoClientesService = require('../Services/ativoCliente.service');

const ativoClienteController = async (req, res) => {
    const { id } = req.params;
    const ativos =  await ativoClientesService(id);
    return res.status(200).json(ativos);
};

module.exports = ativoClienteController;