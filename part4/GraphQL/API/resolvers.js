const fetch = require('node-fetch');

async function getReviews() {
  const res = await fetch('http://localhost:8001');
  const json = await res.json();
  return json;
}

async function getProducts() {
  const res = await fetch('http://localhost:8000');
  const json = await res.json();
  return json;
}

async function getProduct(id) {
  const products = await getProducts();
  return Promise.resolve(products.find(p => p.id == id));
}

function createProduct(product) {
  const newProduct = {
    ...product,
    id: products.length + 1
  };
  products = [...products, newProduct];

  return Promise.resolve(newProduct);
}

module.exports = {
  Query: {
    hello: () => "world",
    products: async () => getProducts(),
    product: async (_, {
      id
    }) => getProduct(id),
    reviews: async () => getReviews()
  },
  Review: {
    product: async (review) => getProduct(review.product)
  },
  Mutation: {
    createProduct: async (_, {
      product
    }) => createProduct(product)
  }
};