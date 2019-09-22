let products = [{
  id: 1,
  name: 'Avengers - End game'
}]

function getProducts() {
  return Promise.resolve(products);
}

function getProduct(id) {
  return Promise.resolve(products.find(p => p.id == id));
}

function createProduct(product) {
  const newProduct = { ...product, id: products.length + 1};
  products = [...products, newProduct];

  return Promise.resolve(newProduct);
}

module.exports = {
  Query: {
    hello: () => "world",
    products: async() => getProducts(),
    product: async(_, { id }) => getProduct(id)
  },
  Mutation: {
    createProduct: async(_, { product }) => createProduct(product)
  }
};