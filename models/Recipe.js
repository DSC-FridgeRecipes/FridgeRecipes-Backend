const { model, Schema } = require('mongoose');

const Recipe = new Schema({
    // createUserId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    title: String,
    ingredientNameList: [String],
    ingredientAmountList: [String],
    content: String,
});

module.exports = model("Recipe", Recipe);