'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("TransferenciaClientes", {
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
      transferenciaId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Transferencias",
          key: "id",
        },

        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        primarykey: true,
      },
      saque: {
        type: Sequelize.DECIMAL,
      },
      depósito: {
        type: Sequelize.DECIMAL,
      },
      saldo: {
        type: Sequelize.DECIMAL,
        foreignKey: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("TransferenciaClientes");
  },
};