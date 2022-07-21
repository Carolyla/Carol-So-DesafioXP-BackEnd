"use strict";
const ativoSchema = (sequelize, DataTypes) => {
  const userTable = sequelize.define(
    "Ativo",
    {
      id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
      codAtivo: DataTypes.INTEGER,
      qtAtivo: DataTypes.INTEGER,
      valor: DataTypes.DECIMAL,
    },
    {
      timestamps: false,
    }
  );
};
module.exports = ativoSchema;
