const { model, Schema } = require('mongoose');

const Recipe = new Schema({
    title: String,
    ingredientNameList: [String],
    ingredientAmountList: [String],
    content: String,
});

module.exports = model("Recipe", Recipe);