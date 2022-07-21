module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "Clientes",
      [
        {  
          codCliente: 'c000101',
          password: "123456",
        },
        {
          codCliente: 'c000102',
          password: "123456",
        },
        {
          codCliente: 'c000103',
          password: "123456",
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("Clientes", null, {});
  },
};
