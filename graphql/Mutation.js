const { addErrorLoggingToSchema } = require("apollo-server");
const Mongoose = require("mongoose");
const Ingredient = require("../models/Ingredient");
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

    /* User - ingredient */
    async addMyIngredient(_, { id, ingredient }) {
        console.log('Mutation :: addMyIngredient', id, ingredient);

        const _user = await User.findByIdAndUpdate(id,
            {
                $push: { ingredients: ingredient }
            }
        );

        if (!_user) return 'User Not Found';

        return `${_user.ingredients} Add Ingredient Success`;
    },

    async deleteAllMyIngredient(_, { id }) {
        console.log('Mutation :: deleteAllMyIngredient', id);

        const _user = await User.findByIdAndUpdate(id,
            {
                $set: { ingredients: [] }
            }
        );

        if (!_user) return 'User Not Found';

        return `${_user.ingredients} Delete All Ingredient Success`;
    },

    /* Recipe */
    async createRecipe(_, { title, ingredientNameList, ingredientAmountList, content }) {
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