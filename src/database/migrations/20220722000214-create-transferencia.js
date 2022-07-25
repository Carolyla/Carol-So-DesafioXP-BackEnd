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
      tipoTransferencia: Sequelize.STRING,
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transferencias');
  }
};