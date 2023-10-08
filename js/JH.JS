//funtion + push commmand

/*function nextInLine (arr, item){
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5]

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: " +JSON.stringify(testArr));*/


// for if statement 
 /*function testElseIf(val) {
    if (val > 10){
        return "greater than 10";
    }
    else if(val < 5) {
        return "smaller than 5";
    }
    else{
        return "between 5 and 10";
    }
 }
 console.log(testElseIf(2))


 //Using array to write an if statement 
 /* var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Boger", "Go Home!"]
  function golfScore(par, strokes){
    if (strokes == 1){
        return names[0]
    }    
    else if (strokes <= par - 2){
        return names[1]
    }
    else if (strokes == par){
        return "Birdie"
    }
    else if (strokes == par){
        return names[3]
    }
    else if (strokes == par + 1){
        return names [4]
    }
    else if (strokes == par + 2){
        return names [5]
    }
    else if (strokes >= par + 6){
        return names [6]
    }
  }
  console.log(golfScore(5,4));*/
  //error in outputing

  //SWITCH STATEMENT
  /*function caseInSwitch(val) {
    var answer ="";
    switch(val) {
        case 1: 
            answer = "alpha";
            break;
        case 2: 
            answer = "beta";
            break; 
        case 3: 
            answer = "gamma";
            break;
        case 4: 
            answer = "delta";
            break;
        default:
            answer = "stuff";
            break;          // default option is like an else statement
    }
        return answer;
  }
  console.log(caseInSwitch(1));*/
  /*function sequentialSize (val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;       
    }
    return answer
}
console.log(sequentialSize(6))*/

/*function isLess(a,b){
    return a < b;
}
console.log(isLess(10, 15));*/
/* var count = 0;
function cc (card){
    switch (card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
        count--;
        break;
    }
    var holdbet = 'hold'
    if (count > 0){
        holdbet = 'bet'
    }
    return count + " " + holdbet
}
cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(4)); */
//yet to be verified


//OBJECT
//create objects
/*var ourDog = {
    "name": " Camper",
    "legs": 4, 
    "tails": 1, 
    "friends": ["everything"]
}*/

//access properties in an object 
/*var testObj = {
    "hat": "ballcap", 
    "shirt": "jersey",
    "shoes": "cleats"
}
//to assign another variable to the above program.
testObj.hat = maike
//to add properties 
testObj[pet] = "dog"
//to delete properties 
delete testobj.hat;*/
//yet to be tested

//to check if an object has its own propertise use (checkProp)

//accessing nested objects 

/*var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunck": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);*/

//record

/*var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    }, 
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    }, 
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [] 
    },
    "5439": {
        "album": "ABBA Gold"
    }
}

// keep a copy of the collection for tests 
var collectionCopy = JSON.parse(JASON.stringify(collection));

function updateRecords(id, prop, value){
    if (value === ""){
        delete collection[id][prop];
    }else if (prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[d][prop].push(value); 
    }else{
        collection[id][prop] = value;
    }
    return collection;
}

console.log(updateRecords(5439, "artist", "ABBA"));*/

//FOR AND WHILE LOOP

/*var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++){
    ourTotal += ourArr[i];
}

console.log(ourTotal);*/

//Nesting for loops
/*function multiplyAll(arr){
    var product = 1;
    
    for (var i=0; i < arr.lenght; i++){
        for (var j=0; j  < arr[i].length; j++){
            product += arr[i][j];
        }
    }
    return product;
}
var product = multiplyAll([[1,2],[3,4],[5.6.7]]);*/


//DOWHILELOOP
/*var myArray =[];
var i = 10;

do{
    myArray.push(i);
    i++;
}while (i < 5)

console.log(i, myArray);*/

/*var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Browine Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372084",
        "likes": ["Hogworts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "043735643",
        "likes": ["Intringes Case", "Volin"]
    },
    {
        "firstName": "Krisian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    },
]

function lookUpProfile(name, prop){
    for (var i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name){
            return contacts[i][prop] || "no such property";
        }
    }
    return "No such contact";
}

var data = lookUpProfile("Sherlock", "lastName");
console.log(data);*/


/*function checkEqual(a, b) {
    return a ===b ? true : false;
    return;
}

console.log(checkEqual(1,1));*/

//HOW TO USE FREEZE 

/*function freezeObj (){
    "use strict";
    const MATH_CONSTANTS = { 
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS)
    try{
        MATH_CONSTANTS.PI = 99;
    }catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI
}
const PI = freezeObj();

console.log(PI);*/

/*const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squareIntegers = arr.filter (num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squareIntegers; 
}; 

const squareIntegers = squareList(realNumberArray);
console.log(squareIntegers);*/

/*const increment = (function() {
    return funtion increment (number, value = 1) {
        return number + value; 
    };
})();
console.log(increment(5, 2));
console.log(increment(5)); */
/*const person = {
    name: "zodiac hasbro",
    age: 56
};
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log (greeting);
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr){
    const resultDisplayArray = [];
    for (let i =0; i < arry.length; i++){
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArrays);*/

/*const createPerson = (name, age, gender) => ( {name, age, gender});
console.log(createPerson("Zodiac Hasbro", 56, "male"));*/

import { captializeString } from "./r";
const cap = captializeString("hello!");
console.log(cap);














