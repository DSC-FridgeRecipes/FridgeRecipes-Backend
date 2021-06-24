const { model, Schema } = require('mongoose');

const User = new Schema({
    email: { type: String, required: true },
    recipes: [String],
    ingredients: [String],
});

module.exports = model("User", User);
