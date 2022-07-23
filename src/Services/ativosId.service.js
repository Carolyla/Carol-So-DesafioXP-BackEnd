const { Ativo } = require('../database/models')

const getAtivoByIdService = async (id) => {
    const ativoId = await Ativo.findByPk(id)
    return ativoId
}
module.exports = getAtivoByIdService;