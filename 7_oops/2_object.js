// everything in javascript is an object => string, array, function
// due to protypal behaviour of javascrpt it is able to provide concept of classes, protypal inheritance, new keyword, this keyword
// it keeps on searching through prototype of its parent and ultimately stops at object
// object has not parent finally 

function multiplyBy5(n) {
    return n*5
}
multiplyBy5.power=2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

// we can also inject our own functions in the prototype---------------------------------------------

function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increament = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
}

// you do not have to add .prototype to use any feature use them directly with .name_of_feature

// const chai = createUser("chai",25)
// const tea = createUser("tea",250)
// chai.printMe() // property is injected but not instantiated for this variable chai 

const chai = new createUser("chai",25)
const tea = new createUser("tea",250)
chai.printMe()
chai.increament()
chai.printMe()

/* when new keyword is used:------------------------------------------------------------------------
1. new object is created
2. object gets linked to prototype protperty of constructor
3. the contructor i called with specified arguments. if no explicit return value is defined the 
    Javascript assumes this 
4. finally the newly created object is returned */