const { model, Schema } = require('mongoose');

const Ingredient = new Schema({
    name: String,
    amount: String,
});

module.exports = model("Ingredient", Ingredient);