const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model {}

Item.init(
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
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    unit_of_measurement: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    par_level: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    exp_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    // Store a reference of the `id` of the `section` the item is going in 
    section_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'section',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'item'
  }
);

module.exports = Item;
