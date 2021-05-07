const User = require('./User');
const Section = require('./Section');
const Item = require('./Item');

User.hasMany(Section, {
   foreignKey: 'user_id',
});

Section.belongsTo(User, {
    foreignKey: 'user_id'
});

Section.hasMany(Item, {
    foreignKey: 'section_id'
});

Item.belongsTo(Section, {
    foreignKey: 'section_id'
});

module.exports = {User, Section, Item};