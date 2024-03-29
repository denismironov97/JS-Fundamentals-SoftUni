function furniture(data) {
  let pattern = new RegExp(
    ">>(?<furniture>[\\w]+)<<(?<price>[\\d]+[.]?[\\d]+)!(?<quantity>[\\d]+)"
  );

  let command = data.shift();
  let furniture = [];
  let currMoney = 0;
  let moneyTotal = 0;
  let quantity = 0;

  while (command != "Purchase") {
    let match = pattern.exec(command);

    if (match !== null) {
      furniture.push(match.groups["furniture"]);
      currMoney = Number(match.groups["price"]);
      quantity = Number(match.groups["quantity"]);
      moneyTotal += currMoney * quantity;
    }

    command = data.shift();
  }

  console.log("Bought furniture:");

  for (let i = 0; i < furniture.length; i++) {
    const currFurniture = furniture[i];
    console.log(currFurniture);
  }
  console.log(`Total money spend: ${moneyTotal.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);

console.log("-------");

furniture([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);

console.log("-------");

furniture([">Invalid<<!4", ">Invalid<<!2", ">Invalid<<!5", "Purchase"]);
