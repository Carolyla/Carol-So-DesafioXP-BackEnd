'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("AtivoClientes", {
      clienteId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Clientes",
          key: "id",
        },

        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        primarykey: true,
      },
      ativoId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Ativos",
          key: "id",
        },

        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        primarykey: true,
      },

      qtAtivoCliente: {
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AtivoClientes');
  }
};