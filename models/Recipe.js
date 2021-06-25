const { model, Schema } = require('mongoose');

const RecipeSchema = new Schema({
    title: String,
    ingredientNameList: [String],
    ingredientAmountList: [String],
    content: String,
});

module.exports = model("Recipe", RecipeSchema);