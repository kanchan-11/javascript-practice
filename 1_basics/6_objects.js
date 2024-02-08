// singleton
    // Object.create

//object literals

const mySym = Symbol("key")
const user={
    name:"kanchan",
    age:21,
    [mySym]:"AKTU",
    mySym:"Uiversity",
    "full name":"Kanchan Agarwal",
    location:"lucknow",
    email:"kanchan@gmail.com",
    isLoggedIn: false,
    lastLogginDays:["Monday","Wednesday","Saturday"]
} 
// console.log(user);

// console.log(user.email);
// console.log(user["email"]);

// console.log(user["full name"]);
// console.log(user[mySym]);

user.email="kanchan@yahoo.com"
// console.log(user);

// Object.freeze(user)
user.email="agarwal@gmail.com"
// console.log(user)

user.greeting = function(){
    console.log("Hello world");
}
user.greeting2 = function(){
    console.log(`Hello world ,${this.name}`);
}
// console.log(user.greeting());
// console.log(user.greeting2());

const user3 = new Object()
// console.log(user3);
user3.id="123"
user3.name="kanchan"
user3.email="kanchan@gmail.com"
// console.log(user3);

const user4 = {
    email:"kanchan@gmail.com",
    fullname:{
        firstname:"kanchan",
        lastname:"agarwal"
    }
}
// console.log(user4);
// console.log(user4.fullname);
// console.log(user4.fullname.firstname);
// console.log(user4.fullname?.lastname);

const ob1 = {1:"a",2:"b"}
const ob2 = {3:"c",2:"b"}

const ob3 = {ob1,ob2}
// console.log(ob1);
// console.log(ob2);
// console.log(ob3);

// const ob4 = Object.assign(ob1,ob2) // makes the ob1 as target => add content of ob2 in ob1 
// console.log(ob1); 
// console.log(ob2);
// console.log(ob4);

// const ob5 = Object.assign({},ob1,ob2) // makes the empty object as target => no change in ob1 and ob2
// console.log(ob1);
// console.log(ob2);
// console.log(ob5);

const ob6 = {...ob1,...ob2}
// console.log(ob1)
// console.log(ob2)
// console.log(ob6)

const list =[
    {
        "id":1,
        "paswword":1111
    },
    {
        "id":2,
        "password":2222
    },
    {
        "id":1,
        "password":2222
    }
]
// console.log(list);
// console.log(list[1]);
// console.log(list[1].password);

// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user)); // represnets each key value pair as an array

// console.log(user.hasOwnProperty('isLoggedIn'));

const {email} =  user
// console.log(email);

const {location: loc} = user
// console.log(loc);

const nav = ({name}) =>{
    console.log(name)
}
nav(name="kanchan")

//APIs concept

// API in the form of JSON objects, array format(sometimes) 