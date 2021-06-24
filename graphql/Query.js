const Recipe = require("../models/Recipe");
const User = require("../models/User");

module.exports = {
    /* User - recipes */
    async getAllMyRecipes(_, { userId }) {
        console.log('Query :: getAllMyRecipes', userId);

        const _user = await User.findById(userId);
        if (!_user) return 'User Not Found';

        const recipeIdList = _user.recipes;
        const recipes = await Recipe.find({ _id: { $in: recipeIdList } });

        if (!_user) return 'User Not Found';

        return recipes;
    },
}