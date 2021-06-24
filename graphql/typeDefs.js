const { gql } = require('apollo-server');

const typeDefs = gql`

  type Recipe {
    title: String
    ingredientNameList: [String]
    ingredientAmountList: [String]
    content: String
  }

  type User {
    email: String,,
    recipes: [ID],
    ingredients: [String],
  }

  type Query {
    ### Recipe ###
    getAllMyRecipes(userId: ID): [Recipe]
  }

  type Mutation {
    ### User ###
    signup(email: String): String
    login(email: String): String

    ### Recipe ###
    createRecipe(
        title: String,
        ingredientNameList: [String],
        ingredientAmountList: [String],
        content: String
        ): ID

    ### User - ingredients ###
    addMyIngredient(userId: ID, ingredient: String): String
    deleteMyIngredient(userId: ID, ingredient: String): String
    deleteAllMyIngredient(userId: ID): String

    ### User - recipes ###
    addMyRecipe(userId: ID, recipeId: ID): String
    deleteMyRecipe(userId: ID, recipeId: ID): String
  }
`;

module.exports = typeDefs