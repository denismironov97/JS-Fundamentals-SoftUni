function loadingBar(percentileNumber){
    let timesPercentVal = parseInt(percentileNumber / 10);
    let loadingBar = [];

    for (let i = 0; i < timesPercentVal; i++) {
        loadingBar.push('%');
    }

    for (let i = timesPercentVal; i < 10; i++) {
        loadingBar.push('.');
    }

    if (timesPercentVal === 10) {
        console.log('100% Complete!');
        console.log(`[${loadingBar.join('')}]`);
        return;
    }

    console.log(`${percentileNumber}% [${loadingBar.join('')}]`);
    console.log('Still loading...');
}

loadingBar(50);
loadingBar(30);
loadingBar(90);
loadingBar(100);