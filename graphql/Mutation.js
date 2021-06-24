const { addErrorLoggingToSchema } = require("apollo-server");
const Mongoose = require("mongoose");
const Ingredient = require("../models/Ingredient");
const Recipe = require("../models/Recipe");
const User = require("../models/User");

module.exports = {
    async signUp(_, { email }) {
        console.log('Mutation :: signIn', email);
        try {
            const newUser = await new User({
                email: email,
                recipes: [],
                ingredients: [],
            }).save();

            return 'signIn Success';
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


    async createIngredient(_, { name, amount }) {
        console.log('Mutation :: createIngredient', name, amount);
        try {
            const newIngredient = await new Ingredient({
                name: name,
                amount: amount,
            }).save();

            return 'createIngredient Success';
        } catch (err) {
            return err;
        }
    },

    // async createRecipe(_, { title, ingredients }) {
    //     try {
    //         const newRecipe = new Recipe({
    //             title,
    //             ingredients,
    //         })
    //         const _newRecipe = await newRecipe.save();

    //         return _newRecipe;
    //     } catch (err) {
    //         throw new Error(err);
    //         return;
    //     }
    // },

    // books: async () => {
    //     console.log('Mutation :: books');
    //     return books;
    // }
}