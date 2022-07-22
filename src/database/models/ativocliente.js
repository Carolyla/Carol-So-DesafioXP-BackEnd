"use strict";

const AtivoClienteSchema = (sequelize, DataTypes) => {
  const AtivoCliente = sequelize.define(
    "AtivoCliente",
    {
      clienteId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      ativoId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      qtAtivoCliente: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );

 AtivoCliente.associate = (models) => {
    models.Cliente.belongsToMany(models.Ativo, {
      as: "Ativos",
      through: AtivoCliente,
      foreignKey: "ativoId",
      otherKey: "clienteId",
    });

    models.Ativo.belongsToMany(models.Cliente, {
      as: "Clientes",
      through: AtivoCliente,
      foreignKey: "clienteId",
      otherKey: "ativoId",
    });
  };
  return AtivoCliente;
};
module.exports = AtivoClienteSchema;
