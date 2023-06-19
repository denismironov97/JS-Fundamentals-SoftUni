function partyTimeV1(dataArray) {
  let spliceCount = dataArray.indexOf("PARTY");
  let guestsList = dataArray.splice(0, spliceCount);
  let vipGuests = new Set(guestsList.filter((g) => isGuestVIP(g)));
  let peasants = new Set(guestsList.filter((g) => !isGuestVIP(g)));

  dataArray.shift();

  for (const currGuest of dataArray) {
    if (isGuestVIP(currGuest)) {
      vipGuests.delete(currGuest);
    } else {
      peasants.delete(currGuest);
    }
  }

  //Printing guests who think are too cool to party with the nerds.
  let guestCount = vipGuests.size + peasants.size;
  console.log(guestCount);
  vipGuests.forEach((x) => console.log(x));
  peasants.forEach((x) => console.log(x));

  function isGuestVIP(guestIDString) {
    let char = guestIDString[0];
    return !isNaN(char);
  }
}

function partyTime(input) {
  let invitedList = input.splice(0, input.indexOf("PARTY"));
  input.splice(0, 1);

  let VIP = [];
  let regular = [];

  for (let guest of invitedList) {
    if (guest[0] >= "0" && guest[0] <= "9") {
      VIP.push(guest);
    } else {
      regular.push(guest);
    }
  }

  for (let guest of input) {
    if (VIP.includes(guest)) {
      VIP.splice(VIP.indexOf(guest), 1);
    }
    if (regular.includes(guest)) {
      regular.splice(regular.indexOf(guest), 1);
    }
  }

  console.log(VIP.length + regular.length);
  VIP.forEach((x) => console.log(x));
  regular.forEach((x) => console.log(x));
}

partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);

partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
