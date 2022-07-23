const { Ativo } = require('../database/models');
console.log('log pelo nm start');
const getAllAtivos =  async () => {
    console.log('ESTOU AQUI na função do service');
    const ativos = await Ativo.findAll();
    console.log('CONSOLE LOG DE ATIVOS SERVICE', ativos);
    return ativos
   
};
 // getAllAtivos()
module.exports = getAllAtivos;