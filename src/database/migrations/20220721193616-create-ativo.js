'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Ativos", {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
      
        codAtivo: {
          type: Sequelize.INTEGER
        },
        qtAtivo: {
          type: Sequelize.INTEGER
        },
        valor: {
          type: Sequelize.DECIMAL
        }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Ativos");
  }
};