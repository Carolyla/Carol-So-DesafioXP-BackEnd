"use strict";
const clienteSchema = (sequelize, DataTypes) => {
  const clienteTable = sequelize.define(
    "Cliente",
    {
      id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
      codConta: DataTypes.INTEGER,
      password: DataTypes.STRING,
      saldo: { type: DataTypes.DECIMAL, foreignKey: true },
    },

    {
      timestamps: false,
    }
  );
clienteTable.associate = (models) => {
  clienteTable.belongsToMany(models.TransferenciaCliente, {
    through: "Clientes",
    foreignKey: "saldo",
    as: "newSaldo",
  });
};
    
  return clienteTable;

 };
module.exports = clienteSchema;
