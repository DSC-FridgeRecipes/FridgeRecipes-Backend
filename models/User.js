const { model, Schema } = require('mongoose');

const User = new Schema({
    email: { type: String, required: true },
    recipes: [
        { type: Schema.Types.ObjectId, ref: 'Recipe' }
    ],
    ingredients: [String],
});

module.exports = model("User", User);
