module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert("Transferencias", [
      {
        debito: "500.00",
        credito: "30000.00",
        saldo: "85000.00",
      },
      {
        debito: "5000.00",
        credito: "30000.00",
        saldo: "90000.00",
      },
      {
        debito: "15000.00",
        credito: "30000.00",
        saldo: "50000.00",
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("Transferencias", null, {});
  },
};
