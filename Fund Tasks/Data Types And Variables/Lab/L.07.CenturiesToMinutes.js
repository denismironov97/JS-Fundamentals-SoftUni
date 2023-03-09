function CenturiesToMinutes(centuries) {
  let years = centuries * 100;
  let days = Math.trunc(years * 365.2422); //The Math.trunc() function returns the integer part of a number by removing any fractional digits.
  let hours = days * 24;
  let minutes = hours * 60;

  console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}

CenturiesToMinutes(1);