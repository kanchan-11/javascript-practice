// console.log(Math.PI); // => 3.141592653589793

// description => it is applicable only for property of objects and used to get info. about it 

const description = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(description); 
/* => {
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
  }*/
// due to this writable and enumerable set to false its value cannot be changed

const user ={
    name:'kanchan',
    isStudent: true,
    age:22,

    sayHello: function(){
        console.log(`hello I am ${name}`);
    }
}
// console.log(user);

// console.log(Object.getOwnPropertyDescriptor(user,"name"));
/* => {
    value: 'kanchan',
    writable: true,
    enumerable: true,
    configurable: true
  } */

// the name key value pair will not be displayed now as it has been set as enumerable = false--------
Object.defineProperty(user,'name',{
    writable:false,
    enumerable:false
})
// console.log(Object.getOwnPropertyDescriptor(user,"name"));
/* => {
    value: 'kanchan',
    writable: false,
    enumerable: false,
    configurable: true
  } */ 

// this displays all key value pairs along with the function and its definition everything ---------
// for(let [key,value] of Object.entries(user))
// {
//     console.log(`${key} : ${value}`);
// }

// only key value pairs are printed other than the functions----------------------------------------
for(let [key,value] of Object.entries(user))
{
    if(typeof value !== 'function')
        console.log(`${key} : ${value}`);
}

