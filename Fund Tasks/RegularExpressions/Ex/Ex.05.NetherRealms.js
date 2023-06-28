function netherRealms(stringVal) {
  let splitterRegEx = /[,\s]/g;
  let nameRegEx = /[A-Za-z]/g;
  let numberRegEx = /(?<number>[-+]?[0-9]*\.?[0-9]+)/g;
  let multipliersDevidersRegEx = /(?<multiplier>[*])|(?<devider>[/])/g;

  let demons = stringVal.split(splitterRegEx).filter((d) => d !== "");
  for (const currDemon of demons.sort((nameA, nameB) =>
    nameA.localeCompare(nameB)
  )) {
    let nameMatch = currDemon.match(nameRegEx).join("");

    let health = 0;
    for (let i = 0; i < nameMatch.length; i++) {
      const charCode = nameMatch.charCodeAt(i);
      health += charCode;
    }

    if (!numberRegEx.test(currDemon)) {
      console.log(`${currDemon} - ${health} health, 0.00 damage`);
      continue;
    }

    let numsMatchArr = currDemon.match(numberRegEx).map((x) => Number(x));
    let demonDmg = 0;
    numsMatchArr.forEach((x) => (demonDmg += x));

    let multipliersOrDeviders = multipliersDevidersRegEx.exec(currDemon);
    while (multipliersOrDeviders != null) {
      let currMultiplier = multipliersOrDeviders.groups["multiplier"];
      let currDevider = multipliersOrDeviders.groups["devider"];

      if (currMultiplier !== null) {
        demonDmg *= 2;
      } else if (currDevider !== null) {
        demonDmg /= 2;
      }

      multipliersOrDeviders = multipliersDevidersRegEx.exec(currDemon);
    }

    console.log(
      `${currDemon} - ${health} health, ${demonDmg.toFixed(2)} damage`
    );
  }
}

netherRealms("M3ph-0.5s-0.5t0.0**");

netherRealms("M3ph1st0**, Azazel");

netherRealms("Gos/ho");
