const { gql } = require('apollo-server');

const typeDefs = gql`

  type Recipe {
    id: ID!
    title: String!
    ingredientNameList: [String]!
    ingredientAmountList: [String]!
    content: String!
  }

  type User {
    email: String!
    recipes: [ID]!
    ingredients: [String]!
  }

  type Query {
    ### Recipe ###
    getRecipe(recipeId: ID!): Recipe!
    getAllMyRecipes(userId: ID!): [Recipe]!
    getRecipesWithAllIngredients(ingredients: [String]!): [Recipe]!
    getRecipesWithSomeIngredients(ingredients: [String]!): [Recipe]!
  }

  type Mutation {
    ### User ###
    signup(email: String!): String!
    login(email: String!): String!

    ### Recipe ###
    createRecipe(
      title: String!
      ingredientNameList: [String]!
      ingredientAmountList: [String]!
      content: String!
      ): ID!

    ### User - ingredients ###
    addMyIngredient(userId: ID!, ingredient: String!): String!
    deleteMyIngredient(userId: ID!, ingredient: String!): String!
    deleteAllMyIngredient(userId: ID!): String!

    ### User - recipes ###
    addMyRecipe(userId: ID!, recipeId: ID!): String!
    deleteMyRecipe(userId: ID!, recipeId: ID!): String!
  }
`;

module.exports = typeDefs