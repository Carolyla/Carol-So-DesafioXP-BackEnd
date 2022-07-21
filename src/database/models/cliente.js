"use strict";
const clienteSchema = (sequelize, DataTypes) => {
  const userTable = sequelize.define(
    "Cliente",
    {
      id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER(5) },
      codCliente: DataTypes.STRING,
      password: DataTypes.STRING,
         },

    {
      timestamps: false,
    }
  );

 };
module.exports = clienteSchema;
