function inventory(heroesDataArray) {
    class Hero {
        constructor(name, level, itemsList) {
            this.name = name;
            this.level = level;
            this.itemsList = itemsList;

            this.displayHeroData = () => {
                let stringBuilder = [];

                stringBuilder.push(`Hero: ${this.name}`);
                stringBuilder.push(`level => ${this.level}`);
                stringBuilder.push(`items => ${this.itemsList.join(', ')}`);

                stringBuilder.forEach(x => console.log(x));
            }
        }
    }

    let heroGroup = [];
    for (const currHeroData of heroesDataArray) {
        let heroDataParts = currHeroData.split(' / ');
        let heroName = heroDataParts[0];
        let heroLevel = Number(heroDataParts[1]);
        let heroItemsArray = heroDataParts[2].split(', ');

        let currHero = new Hero(heroName, heroLevel, heroItemsArray);
        heroGroup.push(currHero);
    }

    let result = heroGroup.sort((a, b) => a.level - b.level);

    /*
    for (let i = 0; i < result.length; i++) {
        let hero = result[i];

        hero.itemsList.sort();        
    }
    */

    result.forEach(x => x.displayHeroData());
}


inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
);


/*
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Andrei / 12 / BarrelVest, DestructionSword",
    "Baraka / 12 / Desolator, Sentinel, Antara"
    ]
);
*/
