"use strict";
const transferenciaSchema = (sequelize, DataTypes) => {
  const userTable = sequelize.define(
    "Transferencia",
    {
      id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
      tipoTransferencia: DataTypes.STRING,
         
    },
    {
      timestamps: false,
    }
  );
  return userTable
};
module.exports = transferenciaSchema;
