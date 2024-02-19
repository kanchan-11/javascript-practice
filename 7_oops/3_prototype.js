let  myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}
// injecting kanchan() in prototype of Object 
Object.prototype.kanchan=function(){
    // console.log("kanchan is present in all objects ");
}

// since heroPower is also an Object it inherites this freature kanchan() from its parent Object
heroPower.kanchan() 
// since myHeros is an array that has Object as its parent thus it also gets the features of Object
myHeros.kanchan()

// injecting hello() in prototype of Array 
Array.prototype.hello=function(){
    // console.log("hello is present in all arrays ");
}

// since heroPower is an object it does not inherites this freature hello() from Array
// heroPower.hello() 
// since myHeros is an array that has its parent Array and Object it also gets the features of Array
myHeros.hello()


// inheritance (prototypal inheritance in javascript )---------------------------------------------

const User = {
    username:"kanchan",
    email:"kanchan@google.com"
}
const Teacher = {
    makeVideo:false
}

const TeachingSupport={
    isAvailable:false
}

const TASupport = {
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

// this is the old type of working now outdated-----------------------

Teacher.__proto__=User // add User in prototype of Teacher
// console.log(Teacher);

// the mordern syntax of working--------------------------------------

Object.setPrototypeOf(TeachingSupport,Teacher) //add Teacher in prototype of TeachingSupport


//I want the length of original word without extra space--------------------------------------------
let myName = "kanchan      "
// console.log(myName.trim().length); // it can be done like this to remove ectra scpaces

// if I want to do this for every string I can inject a property trueLength in the string prototype
String.prototype.tureLength = function(){
    return this.trim().length
}
console.log(myName.tureLength())
console.log("  raj    ".tureLength());