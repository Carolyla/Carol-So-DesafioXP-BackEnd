const { Cliente } = require("../database/models");

const getClientesId = async (id) => {
  console.log('Estou dentro da função getCliente, oi',id);
  const clientes = await Cliente.findOne({
    attributes: { exclude: ["password"] },
    where: { id }
  });
  console.log( 'RETORNO DE CLIENTES NO SERVICE', clientes);
  return clientes;
};
module.exports = getClientesId;
