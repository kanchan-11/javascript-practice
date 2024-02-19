// object literal-----------------------------------------------------------------------------------
const user1 ={
    username:"kanchan",
    logincount:6,
    signedIn: true,

    getDetails:function(){
        console.log("Got user details from database");
    }
}
// console.log(user1.username);
// console.log(user1.getDetails());

// any value cannot be accessed directly inside the object also as it need the context--------------
// const user2 ={
//     username:"kanchan",
//     logincount:6,
//     signedIn: true,
//     getDetails:function(){
//         console.log(`Username:${username}`);
//     }
// }
// console.log(user2.getDetails());

const user2 ={
    username:"kanchan",
    logincount:6,
    signedIn: true,

    getDetails:function(){
        console.log(`Username:${this.username}`);
        console.log(this);
    }
}
// console.log(user2.getDetails());

/* global context this gives nothing much in node enviornment but in browser console this gives
 lot of information about the window and other freatures------------------------------------------*/
// console.log(this);


// constructor function => new---------------------------------------------------------------------
// new=> helps to create a new context or new instanceof
// new keyword is very important during object creation otherwise the old value gets overrriden
// 1.empty object is created on new
// 2.constructor function is called
// 3. this keyword gets injected with all feature values
function User(username,loginCount,isSignedIn)
{
    this.username = username
    this.loginCount = loginCount
    this.isSignedIn = isSignedIn
    this.greeting = function(){
        console.log(`hello ${this.username} here`);
    }
    return this // optional
}
const user3 = new User("kanchan",4,true)
const user4 = new User("shradha",14,true)
// console.log(user3);

