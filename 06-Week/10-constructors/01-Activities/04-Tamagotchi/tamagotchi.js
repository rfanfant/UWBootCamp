// constructor function that will be used to create "digitalpal" objects
function DigitalPal(){
    this.hungry = false;
    this.sleepy = false;
    this.bored = false;
    this.age = 0;

    // method which feeds the digitalpal when they are hungry and sets them to sleepy
    this.feed = function(){
        if(this.hungry){
            console.log("That was yummy!")
            this.hungry = false;
            this.sleepy = true;
        }
    }
    // method which puts the digitalPal to sleep when they are sleepy, increase their age by one, and sets them to bored
    this.sleep = function(){
        if(this.sleepy){
            console.log("ZZzzzzzzz")
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        }else{
            console.log("No way! I'm not tired.")
        }
    }

    // method which allows the user to play with their digitalPal when they are bored and sets them to hungry
    this.play = function(){
        if(this.bored){
            console.log("Let's go play !")
            this.bored = false;
            this.hungry = true;
        }else{
            console.log("Not not, i'm good.")
        }
    }



    // method which is called in "this.sleep" to increase the age of the digitalPal by one
    this.increaseAge = function(){
        this.age++;
        console.log("Ayyyyyyyy! It's my birthday! I am " + this.age + " years old!" )
    }
}

var dog = new DigitalPal();
// console.log("DOG OBJ: ", dog);


// add new property to the dog object named outside and set it equal to false
dog.outside = false;

// create new method named bark and add it to the dog object
dog.bark = function(){
    console.log("Woof Woof !")
}
// dog.bark();

dog.goOutside = function(){
    if(!dog.outside){
        console.log("Yay I love the outdoors !")
        this.outside = true;
        this.bark();
    }else{
        console.log("We're already outside !")
    }
}

// dog.goOutside();

dog.letInside = function(){
    if(dog.outside){
        console.log(" Do we have to?")
        this.outside = false;
    }else{
        console.log("We're already inside !")
    }
}

dog.letInside()