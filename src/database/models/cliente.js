"use strict";
const clienteSchema = (sequelize, DataTypes) => {
  const clienteTable = sequelize.define(
    "Cliente",
    {
      id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
      codCliente: DataTypes.STRING,
      password: DataTypes.STRING,
      saldo: DataTypes.DECIMAL,
      testeSaldo: { type: DataTypes.DECIMAL, foreignKey: true },
    },

    {
      timestamps: false,
    }
  );
clienteTable.associate = (models) => {
  clienteTable.belongsToMany(models.TransferenciaCliente, {
    through: "Clientes",
    foreignKey: "testeSaldo",
    as: "newSaldo",
  });
};
    
  return clienteTable;

 };
module.exports = clienteSchema;
