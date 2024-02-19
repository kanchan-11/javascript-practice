/* promise-------------------------------------------------------------------------------------------
 it is a object that represents evenetual completion or failure of an async operation
 eg: file acess, networking request, cryptography, camera activation, DB calls
 3 states : pending, fullfilled, rejected 
 introduced in ES6
 BEFORE promises libraries like bluebird were used 
 now notejs added native support for promises ------------------------------------------------------*/

//creating a promise--------------------------------------------------------------------------------- 
 const promise1 = new Promise(function(resolve,reject)
 {   
    setTimeout(() => // do an async task
    {
        console.log('Async task 1 is complete');
        resolve() // connectng the resolve with the then otherwise then will not be executed
    }, 1000);
 })

 // consuming a promise------------------------------------------------------------------------------
 promise1.then(function(){ //.then() is associated with resolve() of the promise
    console.log('Promise 1 consumed');
 })

 //no need to always store a promise in a variable directly can be created and then consumed also----
 new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Async task 2 is complete');
        resolve()
    },1000)
 }).then(function(){
    console.log('Promise 2 consumed');
 })

 // data can also be passed through a promise--------------------------------------------------------
 const promise3 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"Kanchan",email:"kanchan@google.com"})        
    }, 1000);
 })
 // then() recieves the data passed by promise as an argument
 promise3.then(function(user){
    console.log(`Promise 3 consumed:`);
    console.log(user);
 })

 const promise4 = new Promise(function(resolve,reject){
        setTimeout(function(){
            let error =true
            if(!error){
               console.log("executed promise 4");
                resolve({username:"kanchan",email:"kanchan@google.com"})
            }
            else{
                reject('ERROR: something went wrong!')
            }
        },1000)
 })

 // if then() returns a value it cannot be stored in a variable simply ------------------------------
//  let name = promise4.then((user)=>{
//     console.log('Promise 4 consumed');
//     console.log(user);
//     return user.username
//  })
//  console.log(name);

// chaining or thening is to be done for accessnig the vlaue returned by a then() into another then()
 promise4.then((user)=>{
    console.log('Promise 4 consumed');
    console.log(user);
    return user.username
 }).then((name)=>{
    console.log(name);
 }).catch((error)=>{
   console.log(error);
 }).finally(()=>{
   console.log('Promise 4 is either resolved or rejected');
 })

 // implementing using async await -----------------------------------------------------------------
 const promise5 = new Promise(function(resolve,reject){
   setTimeout(function(){
      let error = true
      if(!error){
         resolve({username:"kanchan",password:"123"})
      }else{
         reject('ERROR: something went wrong promise 5')
      }
   },1000)
 })
 async function consumePromise5(){
   try {
      const response = await promise5
      console.log("Consumed promise 5");
      console.log(response);
   } catch (error) {
      console.log(error);
   }
   
 }
 consumePromise5()

//  async function getAllUsers(){
//    try {
//       const response  = await fetch('https://jsonplaceholder.typicode.com/users')
//       const data = await response.json()
//       console.log(data);  
//    } catch (error) {
//       console.log("ERROR:", error);
//    }
//  }
//  getAllUsers()

 fetch('https://jsonplaceholder.typicode.com/users')
   .then((response)=>{
      return  response.json()
   })
   .then((data)=>{
      console.log(data);
   })
   .catch((error)=>{
      console.log(error);
   })
