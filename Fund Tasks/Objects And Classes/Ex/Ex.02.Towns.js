function towns(townsLocationsDataArray) {
    class Town {
        constructor(townName, latitude, longitude) {
            this.town = townName;
            this.latitude = Number(latitude).toFixed(2);
            this.longitude = Number(longitude).toFixed(2);

            this.displayTownData = () => {
                console.log(`{ town: '${this.town}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`)
            }
        }
    }

    let towns = [];
    for (let i = 0; i < townsLocationsDataArray.length; i++) {
        [townName, latitude, longitude] = townsLocationsDataArray[i].split(' | ');
        let currTown = new Town(townName, latitude, longitude);
        towns.push(currTown);
    }

    towns.forEach(townObj => townObj.displayTownData());
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);