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
  userTable.associate = (models) => {
    userTable.hasMany(models.AtivoCliente, {
      foreignKey: "ativoId",
      as: "ativos",
    });
  };
  return userTable;
};
module.exports = ativoSchema;
