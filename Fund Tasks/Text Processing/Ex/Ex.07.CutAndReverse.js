function cutAndReverse(stringVal) {
  let halfIndex = parseInt(stringVal.length / 2);

  let firstWord = stringVal.substring(0, halfIndex);
  let firstWordArr = Array.from(firstWord).reverse();

  let secondWord = stringVal.substring(halfIndex);
  let secondWordArr = Array.from(secondWord).reverse();

  let firstWordReversed = firstWordArr.join("");
  let secondWordReversed = secondWordArr.join("");

  return firstWordReversed + "\n" + secondWordReversed;
}

console.log(cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT"));

console.log(cutAndReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI"));
