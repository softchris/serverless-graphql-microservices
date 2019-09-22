const schema = require('./schema');
const resolvers = require('./resolvers');

const { ApolloServer } = require("apollo-server");
const server = new ApolloServer({ typeDefs: schema, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});