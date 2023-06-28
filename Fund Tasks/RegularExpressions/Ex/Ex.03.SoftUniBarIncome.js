function softUniBarIncome(dataArr) {
  let regExPattern =
    /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+)\$/g;

  let totalPrice = 0;
  let command = dataArr.shift();
  while (command !== "end of shift") {
    let match = regExPattern.exec(command);

    if (match == null) {
      command = dataArr.shift();
      continue;
    }

    let customer = match.groups["customer"];
    let product = match.groups["product"];
    let count = Number(match.groups["count"]);
    let price = Number(match.groups["price"]);

    let currTotalPrice = (price * count).toFixed(2);
    totalPrice += Number(currTotalPrice);

    console.log(`${customer}: ${product} - ${currTotalPrice}`);
  }

  console.log(`Total income: ${totalPrice.toFixed(2)}`);
}

softUniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);

softUniBarIncome([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);
