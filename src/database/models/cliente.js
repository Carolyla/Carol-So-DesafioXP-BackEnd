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

      userTable.associate = (models) => {
      userTable.hasMany(models.AtivoCliente,
      {foreignKey: 'clienteId', as: 'clientes'})
      }
  
  return userTable;

 };
module.exports = clienteSchema;
