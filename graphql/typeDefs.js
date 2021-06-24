const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Ingredient {
    name: String
    amount: String
  }
  
  type Recipe {
    title: String
    ingredientNameList: [String]
    ingredientAmoutList: [String]
    content: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
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
    # createIngredient(name: String, amount: String): String
  }
`;

module.exports = typeDefs