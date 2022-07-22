module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "AtivoClientes",
      [
        {
          clienteId: 1,
          AtivoId: 1,
        },
        {
          clienteId: 2,
          AtivoId: 2,
        },
        {
          clienteId: 3,
          AtivoId: 3,
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("AtivoClientes", null, {});
  },
};
