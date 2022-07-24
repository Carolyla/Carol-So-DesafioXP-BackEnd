const { Ativo, AtivoCliente, Cliente } = require('../database/models');

const ativoClientes = async (id) => {
  const ativos = await AtivoCliente.findAll({ attributes: { exclude: ["clienteId", "ativoId"] }});
    // const ativos = await AtivoCliente.findOne({
    //   include: [
    //     {
    //       model: Ativo,
    //       as: "ativos",
    //       attributes: { exclude: ["qtAtivo"] },
    //     },
    //     {
    //       model: Cliente,
    //       as: "clientes",
    //       attributes: { exclude: ["password"] },
    //     },
    //   ],
    //   where: { id },
    // });
     //console.log("LOG DO SERVICE ATIVOS CLIENTES", ativos);
    return ativos;
  
};

module.exports = ativoClientes;