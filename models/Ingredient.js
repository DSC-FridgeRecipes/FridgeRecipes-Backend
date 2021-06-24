const { model, Schema } = require('mongoose');

const ingredientSchema = new Schema({
    name: String,
    amount: String,
});

module.exports = model("Ingredient", ingredientSchema);