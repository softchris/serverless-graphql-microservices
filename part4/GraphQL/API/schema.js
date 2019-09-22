const {
  gql
} = require("apollo-server");

const typeDefs = gql `
  type Product {
    id: ID,
    name: String
  } 

  type Review {
    grade: Int,
    title: String,
    description: String,
    product: Product
  }

  input ProductInput {
    name: String
  }

  type Mutation {
    createProduct(product: ProductInput): Product
  }

  type Query {
    hello: String,
    products: [Product],
    product(id: ID!): Product,
    reviews: [Review]
  }
`

module.exports = typeDefs;