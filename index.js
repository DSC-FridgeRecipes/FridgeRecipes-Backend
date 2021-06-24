const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/typeDefs.js')
const resolvers = require('./graphql/index.js');

require('dotenv').config();

mongoose.connect(
  process.env.MONGODB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
).then(() => {
  console.log("🚛  DB connection successful");
}).catch((err) => {
  console.error("❌  DB connection failure");
});

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
