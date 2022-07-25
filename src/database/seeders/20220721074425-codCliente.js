module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "Clientes",
      [
        {
          codConta: 101,
          password: "123456",
          saldo: "20000.00",
        },
        {
          codConta: 102,
          password: "123456",
          saldo: "123630.00",
        },
        {
          codConta: 103,
          password: "123456",
          saldo: "10000.00",
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("Clientes", null, {});
  },
};
