// Primitive Types : 7
    // number
    // bigInt
    // string
    // boolean
    // null
    // undefinded
    // symbol
// Reference Types (Non-primitive) : 3
    // array
    //objects
    //functions

// console.log(typeof undefined)

let score1 = 33
// console.log(typeof score1)
// console.log(typeof(score1))

let score2 = "33"
// console.log(typeof score2)
// console.log(typeof(score2))

// let valueInNumber = Number(score1)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// let valueInNumber = Number(score2)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

let score3 = "33ab"
// let valueInNumber = Number(score3)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

let score4 = null
// let valueInNumber = Number(score4)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

let score5 = undefined
// let valueInNumber = Number(score5)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

let score6 = false
// let valueInNumber = Number(score6)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

let isLoggedIn1 = 1
// let booleanLoggedIn = Boolean(isLoggedIn1)
// console.log(isLoggedIn1 +" "+ typeof isLoggedIn1)
// console.log(booleanLoggedIn+" "+ typeof booleanLoggedIn)

let isLoggedIn2 = "no"
// let booleanLoggedIn = Boolean(isLoggedIn2)
// console.log(isLoggedIn2 +" "+ typeof isLoggedIn2)
// console.log(booleanLoggedIn+" "+ typeof booleanLoggedIn)

let isLoggedIn3 = ""
// let booleanLoggedIn = Boolean(isLoggedIn3)
// console.log(isLoggedIn3 +" "+ typeof isLoggedIn3)
// console.log(booleanLoggedIn+" "+ typeof booleanLoggedIn)

let someNumber1 = 33
// let stringNumber = String(someNumber1)
// console.log(someNumber1+" "+typeof someNumber1)
// console.log(stringNumber+" "+typeof stringNumber)

let value = 44
let negativeValue = -value
// console.log(value+" "+negativeValue)

// console.log("1"+1)
// console.log(1+"1")A
// console.log(1+1+"1")
// console.log("1"+1+1)
// console.log(1+"1"+1)

// console.log("2">1)
// console.log("02">1)

// console.log(null>0)
// console.log(null<0)
// console.log(null==0)
// console.log(null>=0)
// console.log(null<=0)

// console.log(undefined>0)
// console.log(undefined<0)
// console.log(undefined==0)
// console.log(undefined>=0)
// console.log(undefined<=0)

// console.log("2"==2)
// console.log("2"===2)

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id==anotherId)
// console.log(id===anotherId)

const bigNumber = 34567890987655432212n
// console.log(bigNumber+" "+typeof bigNumber)

// Refernce types (Non-primitive)

const fruits=["apple","mango","banana"]
// console.log(fruits)

let myObj = {
    name:"kanchan",
    age:21
}
// console.log(myObj)

const myfunc = function(){
    console.log("hello")
}
// console.log(typeof myfunc)

//------------------------------------------------------------------------------------------//

// Stack space => primitive
// Heap space => non-primitive (reference types)

let name1="kanchan"
let name2=name1
// console.log(name1+" "+name2)
name2="shradha"
// console.log(name1+" "+name2)

let user1={
    id:"abcd",
    password:"1234"
}
let user2=user1
// console.log(user1.id+" "+user1.password)
// console.log(user2.id+" "+user2.password)
user2.password="5678"
user1.id="efgh"
// console.log(user1.id+" "+user1.password)
// console.log(user2.id+" "+user2.password)

const name="kanchan"
const rollno=60
// console.log("Name: "+name+" Roll no.: "+rollno)
// console.log(`Name: ${name} Roll no.: ${rollno}`)

const userId = "  Kanchan Agarwal   "
console.log(userId.trim())
console.log(userId[3])
console.log(userId.charAt(3))
console.log(userId.length)
console.log(userId.toUpperCase())
console.log(userId.indexOf('a'))
console.log(userId.substring(2,10))
console.log(userId.slice(-10,18))