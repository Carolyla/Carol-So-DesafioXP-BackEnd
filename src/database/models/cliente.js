"use strict";
const clienteSchema = (sequelize, DataTypes) => {
  const clienteTable = sequelize.define(
    "Cliente",
    {
      id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
      codCliente: DataTypes.STRING,
      password: DataTypes.STRING,
      saldo: DataTypes.DECIMAL,
    },

    {
      timestamps: false,
    }
  );

    
  return clienteTable;

 };
module.exports = clienteSchema;
