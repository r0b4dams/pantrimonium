const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Section extends Model {}

Section.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Store a reference of the `id` of the `inventory` the section is going in 
    inventory_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'inventory',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'section'
  }
);

module.exports = Section;
