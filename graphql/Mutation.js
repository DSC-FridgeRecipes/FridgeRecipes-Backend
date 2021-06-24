const { addErrorLoggingToSchema } = require("apollo-server");
const Mongoose = require("mongoose");
const Recipe = require("../models/Recipe");
const User = require("../models/User");

module.exports = {

    /* User */
    async signup(_, { email }) {
        console.log('Mutation :: signup', email);
        try {
            const _user = await new User({
                email: email,
                recipes: [],
                ingredients: [],
            }).save();

            return 'signup Success';
        } catch (err) {
            return err;
        }
    },

    async login(_, { email }) {
        console.log('Mutation :: login', email);
        const _user = await User.findOne({ email });

        if (!_user) return 'User Not Found';

        return `${_user.email} login Success`;
    },

    /* Recipe */
    async createRecipe(_, { title, ingredientNameList, ingredientAmountList, content }) {
        console.log('Mutation :: createRecipe', title);
        try {
            const _recipe = await new Recipe({
                title: title,
                ingredientNameList: ingredientNameList,
                ingredientAmountList: ingredientAmountList,
                content: content
            }).save();

            return _recipe._id;

        } catch (err) {
            throw new Error(err);
            return;
        }
    },

    /* User - ingredients */
    async addMyIngredient(_, { userId, ingredient }) {
        console.log('Mutation :: addMyIngredient', userId, ingredient);

        const _user = await User.findByIdAndUpdate(userId,
            {
                $push: { ingredients: ingredient }
            }
        );

        if (!_user) return 'User Not Found';

        return `${_user.ingredients} Add Ingredient Success`;
    },

    async deleteMyIngredient(_, { userId, ingredient }) {
        console.log('Mutation :: deleteMyIngredient', userId, ingredient);

        const _user = await User.findByIdAndUpdate(userId,
            {
                $pull: { ingredients: ingredient }
            }
        );

        if (!_user) return 'User Not Found';

        return `${_user.ingredients} Remove Ingredient Success`;
    },

    async deleteAllMyIngredient(_, { userId }) {
        console.log('Mutation :: deleteAllMyIngredient', userId);

        const _user = await User.findByIdAndUpdate(userId,
            {
                $set: { ingredients: [] }
            }
        );

        if (!_user) return 'User Not Found';

        return `${_user.ingredients} Delete All Ingredient Success`;
    },

    /* User - ingredients */
    async addMyRecipe(_, { userId, recipeId }) {
        console.log('Mutation :: addMyRecipe', userId, recipeId);

        const _user = await User.findByIdAndUpdate(userId,
            {
                $push: { recipes: recipeId }
            }
        );

        if (!_user) return 'User Not Found';

        return `${_user.recipes} Add Recipe Success`;
    },

    async deleteMyRecipe(_, { userId, recipeId }) {
        console.log('Mutation :: deleteMyRecipe', userId, recipeId);

        const _user = await User.findByIdAndUpdate(userId,
            {
                $pull: { recipes: recipeId }
            }
        );

        if (!_user) return 'User Not Found';

        return `${_user.recipes} Remove Recipe Success`;
    },

    // async createIngredient(_, { name, amount }) {
    //     console.log('Mutation :: createIngredient', name, amount);
    //     try {
    //         const newIngredient = await new Ingredient({
    //             name: name,
    //             amount: amount,
    //         }).save();

    //         return 'createIngredient Success';
    //     } catch (err) {
    //         return err;
    //     }
    // },

    // books: async () => {
    //     console.log('Mutation :: books');
    //     return books;
    // }
}