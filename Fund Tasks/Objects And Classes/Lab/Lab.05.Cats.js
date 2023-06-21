function cats(dataArray) {
    let cats = [];

    class Cat {
        constructor(name,  age){
            this.name = name;
            this.age = age;

            this.meow = function(){
                console.log(`${this.name}, age ${this.age} says Meow`);
            }
        }
    }

    for (let i = 0; i < dataArray.length; i++) {
        const catData = dataArray[i].split(' ');
        const catName = catData[0];
        const catAge = Number(catData[1]);

        const currCat = new Cat(catName, catAge);
        cats.push(currCat);
    }

    for (const cat of cats) {
        cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);