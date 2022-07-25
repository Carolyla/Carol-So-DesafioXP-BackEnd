const { TransferenciaCliente, Cliente } = require('../database/models');
const Falha = {
       status: 409,
       message: `Saldo Insufiente`,
     };

const saqueService = async (id, valor) => {
  const authSaque = await Cliente.findByPk(id);
  const {  saldo } = authSaque;
  const newSaldo = saldo
  if(valor > newSaldo) {
     throw Falha;
   }
   if (valor < newSaldo) {
      const test = newSaldo - valor
      console.log('log de test', test);
   const updateSaldo = async (id) => {
     const update = await TransferenciaCliente.update(
       { saldo: test },
       { where: { id } }
     );
     return update
   };
   
 };
   
   return updateSaldo
};
module.exports = saqueService;