const Recipe = require("../models/Recipe");
const User = require("../models/User");

module.exports = {
    /* Recipe */
    async getRecipe(_, { recipeId }) {
        console.log('Query :: getRecipe', recipeId);

        const _recipe = await Recipe.findById(recipeId);
        if (!_recipe) return 'Recipe Not Found';

        return _recipe;
    },

    /* User - recipes */
    async getAllMyRecipes(_, { userId }) {
        console.log('Query :: getAllMyRecipes', userId);

        const _user = await User.findById(userId);
        if (!_user) return 'User Not Found';

        const recipeIdList = _user.recipes;
        const recipes = await Recipe.find({ _id: { $in: recipeIdList } });

        return recipes;
    },
}