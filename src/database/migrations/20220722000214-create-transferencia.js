'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Transferencias", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      debito: {
        type: Sequelize.DECIMAL,
      },
      credito: {
        type: Sequelize.DECIMAL,
      },
      saldo: {
        type: Sequelize.DECIMAL,
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transferencias');
  }
};