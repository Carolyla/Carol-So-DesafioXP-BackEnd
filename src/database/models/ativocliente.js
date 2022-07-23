"use strict";

const AtivoClienteSchema = (sequelize, DataTypes) => {

  const AtivoClientes = sequelize.define(
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

 AtivoClientes.associate = (models) => {
    models.Cliente.belongsToMany(models.Ativo, {
      as: "ativos",
      through: AtivoClientes,
      foreignKey: "ativoId",
      otherKey: "clienteId",
    });

    models.Ativo.belongsToMany(models.Cliente, {
      as: "clientes",
      through: AtivoClientes,
      foreignKey: "clienteId",
      otherKey: "ativoId",
    });
  };
  
  return AtivoClientes;
};
module.exports = AtivoClienteSchema;
