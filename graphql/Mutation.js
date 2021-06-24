const Mongoose = require("mongoose");
const Ingredient = require("../models/Ingredient");
const Recipe = require("../models/Recipe");

module.exports = {
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