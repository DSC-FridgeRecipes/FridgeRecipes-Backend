const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    recipes: [
        { type: Schema.Types.ObjectId, ref: 'Recipe' }
    ],
    ingredients: [String],
});

module.exports = model("User", UserSchema);
