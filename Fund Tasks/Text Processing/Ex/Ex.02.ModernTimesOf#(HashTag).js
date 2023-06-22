function modernTimesHashTag(stringVal) {
  let textArray = stringVal
    .split(" ")
    .filter((x) => x.startsWith("#") && x.length > 1)
    .map((el) => el.substring(1));

  let doesWordContainSpecialSymbolsOrNumbers = function (strArg) {
    for (let i = 0; i < strArg.length; i++) {
      let charCodeSymbol = strArg.charCodeAt(i);

      if (
        (charCodeSymbol >= 32 && charCodeSymbol <= 64) ||
        (charCodeSymbol >= 91 && charCodeSymbol <= 96) ||
        (charCodeSymbol >= 123 && charCodeSymbol <= 127)
      ) {
        return true;
      }
    }

    return false;
  };

  textArray = textArray.filter(
    (el) => !doesWordContainSpecialSymbolsOrNumbers(el)
  );

  textArray.forEach((el) => console.log(el));
}

//modernTimesHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia #11');

modernTimesHashTag(
  "Nowadays everyone uses #b to tag a  word in  #11 #mon$ey #mon%%  #word! #!word"
);
