function storeProvisions(orderedProducts, instoreProducts) {
  let products = [];

  for (let i = 0; i < orderedProducts.length; i += 2) {
    let productName = orderedProducts[i];
    let productQuantity = Number(orderedProducts[i + 1]);

    if (products.some((x) => x.productName === productName)) {
      increaseQuantityOfExistingProduct(products, productName, productQuantity);
      continue;
    }

    let productObj = { productName, productQuantity };
    products.push(productObj);
  }

  for (let i = 0; i < instoreProducts.length; i += 2) {
    let productName = instoreProducts[i];
    let productQuantity = Number(instoreProducts[i + 1]);

    if (products.some((x) => x.productName === productName)) {
      increaseQuantityOfExistingProduct(products, productName, productQuantity);
      continue;
    }

    let productObj = { productName, productQuantity };
    products.push(productObj);
  }

  products.forEach((obj) =>
    console.log(`${obj.productName} -> ${obj.productQuantity}`)
  );

  function increaseQuantityOfExistingProduct(
    productsArg,
    productNameArg,
    quantityArg
  ) {
    let specificProduct = productsArg.filter(
      (x) => x.productName === productNameArg
    )[0];
    specificProduct.productQuantity += quantityArg;
  }
}

/*
storeProvisons([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);
*/

storeProvisions(
  ["Chips", "5", "CocaCola", "10", "Bananas", "15", "Pasta", "5", "Beer", "3"],
  ["Pasta", "100", "Oil", "10", "Pasta", "700", "CocaCola", "80"]
);
