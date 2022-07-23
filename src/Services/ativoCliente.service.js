const { Ativo, AtivoCliente, Cliente } = require("../database/models");

const ativoClientes = async (id) => {
    const ativos = await AtivoCliente.findOne({
        include: [
            {
                model: Cliente, as: 'Cliente', attributes: { exclude : ['password'] },
            },
            {
                model: Ativo, as: 'Ativos', attributes: { exclude : ['qtAtivo'] },
            },
        ],
        where: { id },
    });
      console.log('LOG DO SERVICE ATIVOS CLIENTES', ativos);
    return ativos;
  
};
RTCRtpSender
module.exports = ativoClientes;