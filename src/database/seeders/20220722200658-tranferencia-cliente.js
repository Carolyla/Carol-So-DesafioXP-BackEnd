module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "TransferenciaClientes",
      [
        {
          clienteId: 1,
          transferenciaId: 1,
          saque: "100.00",
          depósito: "300.00",
          saldo: "20.00",
        },
        {
          clienteId: 2,
          transferenciaId: 2,
          saque: "100.00",
          saldo: "20.00",
        },
        {
          clienteId: 3,
          transferenciaId: 3,
          saque: "100.00",
          saldo: "20.00",
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("TransferenciaClientes", null, {});
  },
};
