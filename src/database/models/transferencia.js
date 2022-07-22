"use strict";
const transferenciaSchema = (sequelize, DataTypes) => {
  const userTable = sequelize.define(
    "Transferencia",
    {
      id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
      debito: DataTypes.DECIMAL,
      credito: DataTypes.DECIMAL,
      saldo: DataTypes.DECIMAL,
    },
    {
      timestamps: false,
    }
  );
};
module.exports = transferenciaSchema;
