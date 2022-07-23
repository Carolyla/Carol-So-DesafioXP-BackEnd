const ativosService = require('../Services/ativos.service');

const getAllAtivosService = async (_req, res) => {
    const ativos = await ativosService();
    return res.status(200).json(ativos)

}

module.exports = getAllAtivosService;