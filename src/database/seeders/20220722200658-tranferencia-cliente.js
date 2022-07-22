module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "TransferenciaClientes",
      [
        {
          clienteId: 1,
          transferenciaId: 1,
        },
        {
          clienteId: 2,
          transferenciaId: 2,
        },
        {
          clienteId: 3,
          transferenciaId: 3,
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("TransferenciaClientes", null, {});
  },
};
