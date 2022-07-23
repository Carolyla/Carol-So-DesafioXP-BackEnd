"use strict";
const clienteSchema = (sequelize, DataTypes) => {
  const userTable = sequelize.define(
    "Cliente",
    {
      id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
      codCliente: DataTypes.STRING,
      password: DataTypes.STRING,
         },

    {
      timestamps: false,
    }
  );
  return userTable;

 };
module.exports = clienteSchema;
