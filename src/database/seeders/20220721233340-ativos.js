module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "Ativos",
      [
        {
          codAtivo: 3003,
          qtAtivo: 400,
          valor: "300.00",
        },
        {
          codAtivo: 2002,
          qtAtivo: 700,
          valor: "200.00",
        },
        {
          codAtivo: 1001,
          qtAtivo: 1500,
          valor: "100.00",
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("Ativos", null, {});
  },
};
