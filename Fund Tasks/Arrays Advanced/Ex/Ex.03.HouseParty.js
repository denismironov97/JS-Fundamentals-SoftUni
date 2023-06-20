function houseParty(arrayData){
    let partyMembers = [];
    for (const currInvitation of arrayData) {
        let invitationArr = currInvitation.split(' ');
        let personName = invitationArr[0];
        let isPresent = isPersonInMembersList(personName, partyMembers);

        //Person is going to party.
        if(invitationArr.length === 3) {
            if(isPresent){
                console.log(`${personName} is already in the list!`);
                continue;
            }

            partyMembers.push(personName);
        }
        //Person is NOT going to party.
        else{
            //If person is actually present in the list by name, removes the person from the list.
            if (isPresent) {
                removePerson(personName, partyMembers);
            } 
            else {
                console.log(`${personName} is not in the list!`)
            }
        }
    }

    function removePerson(name, array){
        let index = array.indexOf(name);
        array.splice(index, 1);
    }

    function isPersonInMembersList(name, array){
        return array.includes(name);
    }

    return partyMembers.join('\n');
}

console.log(houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
));

console.log(houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
));





