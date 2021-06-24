const { model, Schema } = require('mongoose');

const User = new Schema({
    email: { type: String, required: true },
    recipes: [{
        recipeID: { type: Schema.Types.ObjectId, ref: 'Recipe' }
    }],
    ingredients: [{
        IngredientID: { type: Schema.Types.ObjectId, ref: 'Ingredients' }
    }],
});

module.exports = model("User", User);
