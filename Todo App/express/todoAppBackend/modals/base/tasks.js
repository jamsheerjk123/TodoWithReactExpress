const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tasks', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    taskName: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'task_name'
    },
    taskDescription: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'task_description'
    },
    taskPriority: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'task_priority'
    }
  }, {
    sequelize,
    tableName: 'tasks',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
