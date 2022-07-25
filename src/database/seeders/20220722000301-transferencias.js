module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert("Transferencias", [
      {
        tipoTransferencia: "compra ativos",
      },
      {
        tipoTransferencia: "venda ativos",
      },
      {
        tipoTransferencia: "saque",
      },
      {
        tipoTransferencia: "depósito",
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("Transferencias", null, {});
  },
};
