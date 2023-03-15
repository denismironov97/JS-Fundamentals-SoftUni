function printTownInfo(city, population, squareArea){
    let populationNumber = BigInt(population);
    console.log(`Town ${city} has population of ${populationNumber} and area ${squareArea} square km.`);
}

printTownInfo('Sofia', 1286383, 492);