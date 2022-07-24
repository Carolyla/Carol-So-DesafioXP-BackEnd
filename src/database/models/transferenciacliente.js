"use strict";

const transCliSchema = (sequelize, DataTypes) => {
  const TransferenciaClientes = sequelize.define(
    "TransferenciaCliente",
    {
      clienteId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      transferenciaId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      saque: {
        type: DataTypes.DECIMAL,
      },
      depósito: {
        type: DataTypes.DECIMAL,
      },
      saldoCliente: { type: DataTypes.DECIMAL, foreignKey: true },
    },
    { timestamps: false }
  );

  TransferenciaClientes.associate = (models) => {
    models.Cliente.belongsToMany(models.Transferencia, {
      as: "transferencias",
      through: TransferenciaClientes,
      foreignKey: "clienteId",
      otherKey: "transferenciaId",
    });

    models.Transferencia.belongsToMany(models.Cliente, {
      as: "clientes",
      through: TransferenciaClientes,
      foreignKey: "transferenciaId",
      otherKey: "clienteId",
    });
  }
     
  return TransferenciaClientes;
};
module.exports = transCliSchema;
