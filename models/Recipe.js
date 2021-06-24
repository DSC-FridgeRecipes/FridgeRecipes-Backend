const { model, Schema } = require('mongoose');

const Recipe = new Schema({
    // createUserId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    title: String,
    ingredients: [{
        name: String,
        amount: String,
    }],
});

module.exports = model("Recipe", Recipe);