const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model {}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    unit_of_measurement: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    par_level: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    exp_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
    },
    // Store a reference of the `id` of the `section` the item is going in 
    section_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
