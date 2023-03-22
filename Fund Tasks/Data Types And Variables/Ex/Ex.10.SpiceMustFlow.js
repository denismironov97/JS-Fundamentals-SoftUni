function calculateSpiceYeald(spiceYield){
    let daysCount = 0;
    let spiceExtracted = 0;
    const workersSpicefee = 26;

    while(spiceYield >= 100){
        daysCount++;
        spiceExtracted += spiceYield;
        spiceExtracted -= workersSpicefee;
        spiceYield -= 10;
    }

    if(spiceExtracted >= workersSpicefee){
        spiceExtracted -= workersSpicefee;
    }
    else{
        spiceExtracted = 0;
    }

    console.log(daysCount);
    console.log(spiceExtracted);
}

calculateSpiceYeald(111);