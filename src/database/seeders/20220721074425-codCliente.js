module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "Clientes",
      [
        {
          codCliente: "c000101",
          password: "123456",
          saldo: "10000.00",
          saldoTeste: "20.00",
        },
        {
          codCliente: "c000102",
          password: "123456",
          saldo: "36000.00",
          saldoTeste: "20.00",
        },
        {
          codCliente: "c000103",
          password: "123456",
          saldo: "12000.00",
          saldoTeste: "20.00",
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("Clientes", null, {});
  },
};
