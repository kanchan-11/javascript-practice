//----------------------------this---------------------------------------------------------

const user = {
    name:"kanchan",
    age:21,
    message: function(){
        console.log(`hello ${this.name}.`);
        console.log(this) // points to the current object
    }
}
// user.message() // hello kanchan
user.name="shradha" // this => name = shradha
// user.message() // hello shradha

// console.log(this); // empty object {} as it is referring to a global object

function fun1()
{
    let name="kanchan"
    console.log(this); 
    console.log(this.name) // undefined
}
// fun1();

const fun2 = function()
{
    let name = "kanchan"
    console.log(this);
    console.log(this.name); // undefined
}
// fun2()

const fun3=()=>{
    let name = "kanchan"
    console.log(this) // {}
    console.log(this.name) // undefined
}
// fun3()

/* this is for current object not for any function if a object is there it shows all its attributes
    but if a function is there it's variables would not be pointed by this */



// -------------------------------------arrow functions-------------------------------------


//type 1 (explicit return ) -> with {} return is to be used
const sum = (a,b) =>{return a+b}
// console.log(sum(6,8));

//type 2 (implicit return) -> with () return is not used 
const sum2 = (a,b) =>(a+b) // return number
// console.log(sum(6,8));
const fun = () => ({name:"kanchan", rollno:60}) // return object 
// console.log(fun());

arr = [1,8,3,45,6,7]
// arr.forEach((ele) => console.log(ele)); // arrow function iterating over a array elements

//----------------------------------iife-------------------------------------------------------
//----------------------------immediately invoked function expressions-------------------------
// to remove the problem from global scope execution 
// for creating multiple iife mandatory to seperate by ; otherwise error
const helper1 = function(){
    console.log("hello1");
}
helper1(); 

// named iife
(function helper2(){ 
    console.log("hello2");
})();

// unnamed iife
(()=>{
    console.log("hello3");
})()

// iife inside a console.log()
console.log( ( () => ("hello4") )() );

// unnamed iife with parameters 
((name) =>{ 
    console.log(`hello5 ${name}`);
})("kanchan")