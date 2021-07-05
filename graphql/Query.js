const { UserInputError } = require('apollo-server');
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
        if (!_user) {
            throw new UserInputError('Error :: User Not Found');
        }

        const recipeIdList = _user.recipes;
        const recipes = await Recipe.find({ _id: { $in: recipeIdList } });
        return recipes;
    },

    /* User - ingredients */
    async getAllMyIngredients(_, { userId }) {
        console.log('Query :: getAllMyRecipes', userId);

        const _user = await User.findById(userId);
        if (!_user) {
            throw new UserInputError('Error :: User Not Found');
        }

        return _user.ingredients;
    },

    /* Retrieved Recipe */
    async getRecipesWithAllIngredients(_, { ingredients }) {
        console.log('Query :: getRecipeWithAllIngredients', ingredients);

        const recipes = await Recipe.find({ ingredientNameList: { $all: ingredients } });
        return recipes;
    },

    async getRecipesWithSomeIngredients(_, { ingredients }) {
        console.log('Query :: getRecipeWithSomeIngredients', ingredients);

        const conditions = ingredients.map((ingredient) => ({
            ingredientNameList: ingredient
        }))
        const recipes = await Recipe.find({ $or: conditions });
        return recipes;
    },
}