import Alligator from "./models/Alligator.js";


let ally = new Alligator("Ally", "Green", "F", 200, 60, "big");

class Giraffe {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
    ) {
        this.id = 0,
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
    }
    eat(food){
        console.log(`Uses long neck to eat${food}.`)
    }
}

let gerry = new Giraffe("Gerry","Yellow","M",1800,60,"Flat and Large");
console.log(gerry);
