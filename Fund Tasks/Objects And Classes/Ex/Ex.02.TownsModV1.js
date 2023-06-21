function towns(townsLocationsDataArray) {
    let towns = [];
    for (let i = 0; i < townsLocationsDataArray.length; i++) {
        [townName, latitude, longitude] = townsLocationsDataArray[i].split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let currTown = {town: townName, latitude: latitude, longitude: longitude};
        towns.push(currTown);
    }

    towns.forEach(townObj => console.log(townObj));
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);