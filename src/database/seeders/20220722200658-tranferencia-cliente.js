module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "TransferenciaClientes",
      [
        {
          clienteId: 1,
          transferenciaId: 1,
          valorTransação: "200.00",
          updated: new Date("2011-08-01T19:58:51.000Z"),
        },
        {
          clienteId: 2,
          transferenciaId: 2,
          valorTransação: "300.00",
          updated: new Date("2011-08-01T19:58:51.000Z"),
        },
        {
          clienteId: 3,
          transferenciaId: 3,
          valorTransação: "100.00",
          updated: new Date("2011-08-01T19:58:51.000Z"),
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("TransferenciaClientes", null, {});
  },
};
