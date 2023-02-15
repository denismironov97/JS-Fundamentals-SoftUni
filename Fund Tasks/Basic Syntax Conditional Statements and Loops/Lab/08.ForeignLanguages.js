function printSpokenLanguage(country) {
    switch (country) {
        case 'USA':
        case 'England':
            console.log('English');
            break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            console.log('Spanish');
            break;
        default:
            console.log('unknown');
            break;
    }
}

// printSpokenLanguage('Germany');
// printSpokenLanguage('England');
// printSpokenLanguage('USA');
printSpokenLanguage('Spain');