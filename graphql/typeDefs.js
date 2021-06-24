const { gql } = require('apollo-server');

const typeDefs = gql`

  type Recipe {
    title: String
    ingredientNameList: [String]
    ingredientAmoutList: [String]
    content: String
  }

  type User {
    email: String,,
    recipes: [String],
    ingredients: [String],
  }

  type Query {
    recipes: [Recipe]
  }

  type Mutation {
    signup(email: String): String
    login(email: String): String
    addMyIngredient(id: ID, ingredient: String): String
    deleteAllMyIngredient(id: ID): String
    createRecipe(
        title: String,
        ingredientNameList: [String],
        ingredientAmountList: [String],
        content: String
        ): ID
  }
`;

module.exports = typeDefs