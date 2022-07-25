const clienteIdservice = require('../Services/clienteId.service');

const clienteIdController = async (req, res) => {
    const { id } = req.params;
    const cliente = await clienteIdservice(id);
    return res.status(200).json(cliente);
}

module.exports = clienteIdController