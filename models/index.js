const User = require('./User');
const Inventory = require('./Inventory');
const Section = require('./Section');
const Item = require('./Item');

User.hasOne(Inventory, {
   foreignKey: 'user_id',
   onDelete: 'CASCADE'
});

Inventory.belongsTo(User, {
    foreignKey: 'user_id'
});

Inventory.hasMany(Section, {
    foreignKey: 'inventory_id'
});

Section.belongsTo(Inventory, {
    foreignKey: 'inventory_id'
});

Section.hasMany(Item, {
    foreignKey: 'section_id'
});

Item.belongsTo(Section, {
    foreignKey: 'section_id'
});

module.exports = {User, Inventory, Section, Item};


// const Ingredient = require('./Ingredient');
// const Recipe = require('./Recipe');
// const Recipe_List = require('./Recipe_List');

// User.hasOne(Recipe_List, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Recipe_List.belongsTo(User, {
//     foreignKey: 'user_id'
// });

// Recipe_List.hasMany(Recipe, {
//     foreignKey: 'recipe_list_id'
// });

// Recipe.belongsTo(Recipe_List, {
//     foreignKey: 'recipe_list_id'
// });

// Recipe.hasMany(Ingredient, {
//     foreignKey: 'recipe_id'
// });

// Ingredient.belongsTo(Recipe, {
//     foreignKey: 'recipe_id'
// });