const ativosIdService = require('../Services/ativosId.service');

const getAtiveById = async (req, res) => {
    const { id } = req.params;
    const ativoId = await ativosIdService(id);
    return res.status(200).json(ativoId)
}
module.exports = getAtiveById