'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: "Primary and auto increment key of the table"
    },

    companyId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "Forign key for Company"
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Name of Role"
    },

    all: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "For Permission"
    },

    sort: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "For Sorting Role"
    },

    status: {
      field: "status",
      type: DataTypes.ENUM('ACTIVE', 'INACTIVE', 'DELETED'),
      allowNull: false,
      defaultValue: 'ACTIVE',
      comment: "User is active, inactive or deleted"
    },
  }, {
    freezeTableName: true,
    tableName: 'roles',
  });
  Role.associate = function (models) {
    // associations can be defined here
  };
  return Role;
};