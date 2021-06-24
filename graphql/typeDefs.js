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
    ingredients: [Ingredient]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    recipes: [Recipe]
  }

  type Mutation {
    signUp(email: String): String
    login(email: String): String
    createIngredient(name: String, amount: String): String
  }
`;

module.exports = typeDefs