// create a character constructor function

function Character(name, age, profession, gender, strength, hp){
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.gender = gender;
    this.strength = strength;
    this.hp = hp;
    this.printStats = function(){
        console.log(this);
    };
    this.isAlive = function(){
        if(this.hp < 0){
            console.log(this.name + " died");
        }else{
            console.log(this.name + " IS STILL ALIVE!")
        }
    };
    this.attack = function(defender){
        defender.hp -= this.strength;
    };
    this.levelUP = function(){
        this.age++;
        this.strength += 5;
        this.hp += 25;

    }
}

var sailorMoon = new Character("Bunny", 16, "Video Game Ethusiast", "Lady", 25, 30);

var sailorMercury = new Character("Amy", 15, "Resident Nerd", "Lady", 20, 35);

// console.log("Moon: ", sailorMoon);
// console.log("Mercury", sailorMercury);

sailorMercury.attack(sailorMoon)
sailorMoon.printStats();
sailorMoon.isAlive();

sailorMercury.attack(sailorMoon)
sailorMoon.printStats();
sailorMoon.isAlive();
