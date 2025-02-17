function Person(firstName, lastName, middleName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName
}
Person.prototype.fullName = function() {return this.fullName = this.firstName + " " + this.lastName + " " + this.middleName};


let corey = new Person("Corey", "Loadovsky", "Catman");
let danielle = new Person('Danielle', "Cherry", "Renee");
// console.log(corey["firstName"]);

console.log(corey.fullName())

// ## Question 2
// a. Create a constructor function called `Book` that has properties 
// `title`, `author` and `rating`. Create some instances of `Book`.
// b. Add a prototype function to `Book` called `isGood` that returns 
// `true` if its rating is greater than or equal to 7

function Book(title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
    
}
let harris = new Book("True blood", "C. Harris", 4);
let haverbeke = new Book("Eloquent JavaScript", "Marijn Haverbeke", 8);

Book.prototype.isGood = function() {
    if(this.rating >= 7) {
        return true
    } else {
        return false
    }
}
console.log(haverbeke.isGood());

// ## Question 3
// a. Create a `Dog` constructor function with four properties: 
// `name (string), breed (string), mood (string), and hungry (boolean)`.
// b. Add a prototype function called `playFetch`. It should set the dog's 
// `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
// c. Add a prototype function called `feed`. If the dog is hungry, 
// it should set `hungry` to `false` and print "Woof!" If the dog is not 
// hungry, it should log "The dog doesn't look hungry"
// d. Add a prototype function called `toString` that returns a description
//  of the dog:

function Dog(name, breed, mood, hungry) {
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
}

Dog.prototype.playFetch = function() {
    this.hungry = true;
    this.mood = "playful";
    console.log("Ruff!");
}

Dog.prototype.feed = function() {
    if(this.hungry === true) {
        console.log(false)
    } else {
        console.log("The dog doesn't look hungry")
    }

}

Dog.prototype.toString = function() {
    return this.name + " is a " + this.breed + " " + this.mood + " " + this.hungry
}

let pokey = new Dog("Pokey", "huskey", "playful", false)
let roxy = new Dog("Roxy", "mutt", "playful", false)

console.log(roxy.playFetch())


// ## Question 4

// There are three common scales that are used to measure 
// temperature: Celsius, Fahrenheit, and Kelvin:

// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273

// a. Make an object called `freezingPoint` that has three 
// properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values 
// equal to the freezing point of water.

// b. Make a constructor function called `Celsius` that has one 
// property: `celsius`, and two methods `getFahrenheitTemp`, 
// and `getKelvinTemp`.

// ```js
// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// ```

// c. Give `Celsius` a prototype function called `isBelowFreezing` 
// that returns a `Bool` (true if the temperature is below freezing).

let freezingPoint = {celsius: 0 , fahrenheit: 32, kelvin: -273}

function Celsius(celsius) {
    this.celsius = celsius;
}
Celsius.prototype.getFahrenheitTemp = function(){
    return this.getFharenheitTemp = 1.8 * this.celsius + 32
}
Celsius.prototype.getKelvinTemp = function() {
    return this.getKelvinTemp = this.celsius + 273;
}

Celsius.prototype.isBelowFreezing = function() {
    if(this.celsius <= 0) {
        return true
    } else {
        return false
    }
}

let outsideTempt = new Celsius(10.0)
console.log(outsideTempt.celsius) //returns 10.0
console.log(outsideTempt.getKelvinTemp()) //returns 283.0
console.log(outsideTempt.getFahrenheitTemp()) //returns 50.0

// ## Question 5
// a. Create a constructor function called `Movie` that has properties for 
// `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your 
// `Movie`

// // b. Create an prototype function inside `Movie` called `blurb` that returns a 
// formatted string describing the movie.

// // Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as 
// a man named Borat who was visiting America from Kazakhstan."

function Movie(name, year, genre, cast, description) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.description = description;

    }
let borat = new Movie("Borat", 2006, "Odd Film", "Sacha Baron Cohen", "a man named Borat who was visiting America from Kazakhstan.");

Movie.prototype.blurb = function() {
    return this.blurb = (this.name + " " + this.year + " " + this.genre +
    " " + this.cast + " " + this.description)
}
console.log(borat.blurb());


// ## Question 6
 
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to 
// properties of the same name.

// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an
//  argument and
// returns a new vector that has the sum or difference of the two vectors’ 
// (the one in `this` and the parameter) x and y values.

// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

// [Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)

// ```js
// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}

// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// // => 5
// ```

function Vector (X, Y) {
    this.X = X;
    this.Y = Y;

}
Vector.prototype.plus = function(vector) {
 let sumX = this.X + this.Y
 let sumY = this.Y + this.X
 let newvector = new Vector(sumX, sumY); 
 return newVector
}
Vector.prototype.minus = function(vector) {
    let minusX = this.X + this.Y - vector.X
    let minusY = this.Y + this.X - vector.Y
    let newvector = new Vector(minusX, minusY);
    return newVector;
}

Vector.prototype.getLength = function(){
    Math.sqrt() = this.X * this.X
    Math.sqrt() = this.Y * this.Y 
} 
var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
console.log(v1.plus(v2));
// => Vector {x: 3, y: 5}
console.log(v1.minus(v2));
// => Vector {x: -1, y: -1}

var v3 = new Vector(3, 4)
console.log(v3.getLength());
// => 5



// ## Question 7

// a. Write a constructor function called `Cylinder` that has properties 
// `radius` and `height`.  Create an instance of a Cylinder.

// b. Add a prototype function `getVolume` that returns the 
// [volume](https://www.mathopenref.com/cylindervolume.html)

// c. Add a prototype function `getSurfaceArea` that returns the 
// [surface area](https://www.mathopenref.com/cylinderareamain.html)





// ## Question 8

// [Dates in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript#targetText=The%20Date%20object%20is%20a,the%20current%20date%20and%20time.)

// a. Write a constructor function called `Post` that has properties `datePosted`, `user`, 
// and `text`.  Create an array of `Post` objects.

// b. Create a prototype function that returns whether or not the post was made today.

// c. Filter your array of `Post` objects to only include posts made today.