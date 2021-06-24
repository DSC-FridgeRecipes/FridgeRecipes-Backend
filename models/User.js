const { model, Schema } = require('mongoose');
const Recipe = require('./Recipe');
const Ingredient = require('./Ingredient');

const User = new Schema({
    email: { type: String, index: true, unique: true, required: true },
    recipes: [Recipe],
    ingredients: [Ingredient],
});

module.exports = User;
