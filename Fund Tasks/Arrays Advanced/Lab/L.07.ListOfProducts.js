function getSortedListOfProducts(productsList) {
  let = sortedProductsList = productsList.sort();
  let = resultProductList = sortedProductsList.map(
    (element) => `${incrementor(sortedProductsList, element)}.${element}`
  );
  return resultProductList.join("\n");

  function incrementor(array, presentElement) {
    let indexPos = array.indexOf(presentElement);
    return (indexPos += 1);
  }
}

console.log(
  getSortedListOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"])
);
