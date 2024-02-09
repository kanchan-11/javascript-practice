// for 
// nested for
// while
// do while
// break and continue
//  while (condition) {....}
// do {...} while (condition);

arr = [1,2,3,4,5,6]

str = "kanchan"

obj = {
    id:123,
    name:"kanchan",
    class:4,
    branch:"cs" 
}

map = new Map()
map.set("id",123)    // insert new key value
map.set("name","kanchan") // insert new key value
map.set("class",4) // insert new key value
map.set("branch","cs") // insert new key value
map.set("branch","cse") // override the previous key value

const arro = [
    {
        id:123,
        name:"kanchan",
        class:4,
        branch:"cs" 
    },
    {
        id:456,
        name:"shradha",
        class:5,
        branch:"ca" 
    },
    {
        id:789,
        name:"manya",
        class:3,
        branch:"ias" 
    }
]
//---------------------------------------------for---------------------------------------------------

// in javascript loop overflow error does not occur it gived undefined
for(let i=0;i<=5;i++)
{
    // console.log(arr[i])
}

//--------------------------------------- for of-----------------------------------------------------

// for (const iterator of object) {...} // object can be array or string or map not object

// for of on array----------------------------------------------
for(const ele of arr)
{
    // console.log(ele);
}

// for of on string----------------------------------------------
for( const ch of str)
{
    // console.log(ch);
}

// for of on Map--------------------------------------------------
for(const key of map)
{
    // console.log(key); // display all pair of key value as arrays
}
for(const [key,value] of map)
{
    // console.log(`key: ${key}, value: ${value}`); // destructure the key value pair into key and value variable
}

// for of on object => does not work for object---------------------

// for (const iterator of obj) {
//     console.log(iterator); 
// }
// for (const [key,value] of obj) {
//     console.log(`key: ${key}, value: ${value}`);
// }

//----------------------------------------for in----------------------------------------------------

/* works for array, string, objects, but not for map
    iterates over the keys(or indexes) only */

// for in on object----------------------------------
for(const key in obj)
{
    // console.log(key); // display all keys of object
}
for(const key in obj)
{
    // console.log(`${key} : ${obj[key]} `); // display all keys and their values in the object
}

// for in on array----------------------------------
for(const i in arr)
{
    // console.log(i); // displays all keys(indexes) of array
}
for(const i in arr)
{
    // console.log(`${i} : ${arr[i]} `); // displays all keys(indexes) and the value on that index in array
}

// for in on string---------------------------------
for(const i in str)
{
    // console.log(i); // displays all keys(indexes) of string
}
for(const i in str)
{
    // console.log(`${i} : ${str[i]} `); // displays all keys(indexes) and the character on that index in string
}

// for in on map => does not work for map----------
for(const key in map){
    // console.log(key); 
}
for(const [key,value] in map){
    // console.log(`key: ${key}, value: ${value}`);
}

//--------------------------------------for each-----------------------------------------------------

// for each on array
arr.forEach(function(element){
    // console.log(element);
})
arr.forEach((element) => {
    // console.log(element);
});

/* in this we can also pass a function that I want to call for each element of the array*/
function printDouble(item){
    // console.log(`Double of ${item} = ${item*2}`);
}
arr.forEach((element)=>printDouble(element)) // function can be passed by means of an arrow function
arr.forEach(printDouble) // function can directly be invoked by its reference without ()

arr.forEach((item,index,array) =>{ // for each allows other parameters also other than index
    // console.log(item,index,array);
})

// for each on array of objects
arro.forEach((item)=>{
    // console.log(item.name, item.branch);
})

/* it does not return anything it can only be used to do some operation on each element of array 
    but not return any values*/
    const newArr1 = []
    arr.forEach((element)=>{
                             if(element>40)
                                newArr1.push(element)
                            })
    // console.log(newArr1);


//-----------------------------------------filter----------------------------------------------------

/* it is similar to for each just used specially in case when some values are required to be returned 
    on the basis of some conditions(like sql queries) 
    It can be used to work with array of objects also to apply varoius conditonal filters
    and extract array of certain objects on the basis of filter condition*/

const newArr2 = arr.filter((element) =>{return element>40})
// console.log(newArr2);

const newArr3 = arr.filter((ele)=>(ele>40))
// console.log(newArr3);

const users = arro.filter((user)=>(user.id>400))
// console.log(users);

// console.log(arro.filter((user)=>(user.id>400)))

// console.log(arro.filter((user)=>(user.name==='kanchan')))

//-----------------------------------------------map-------------------------------------------------

/* it is also like for each but used to do some operations on each element of array
                            and return a new array with updated elements*/

const triple = arr.map((element)=> (element*3))
// console.log(triple);

//-------------------------------------------chaining------------------------------------------------

const newArr4 = arr.map((element)=>element*10)
                    .map((element)=>element+5)
                     .filter((element)=>element>10)
// console.log(newArr4);

//-------------------------------------------reduce-------------------------------------------------

/* it is used to accumulate the result of some operation on each element of array and return it
    like doing sum of all element, product of all etc. returning a single value*/
    
// reducer on array
const myarr1 = arr.reduce((accumulator,currentValue)=>{
    // console.log(`Accumulator: ${accumulator} Current Value: ${currentValue}`);
    return accumulator+currentValue
},0)
// console.log(myarr1);

const myarr2 = arr.reduce((accumulator,currentValue)=>{
    // console.log(`Accumulator: ${accumulator} Current Value: ${currentValue}`);
    return accumulator*currentValue
},1)
// console.log(myarr2);

const myarr3 = arr.reduce((acc,curr)=>(curr+acc),0)
// console.log(myarr3);

const myarr4 = arr.reduce((acc,curr)=>(curr*acc),0)
// console.log(myarr4);


// reducer on array of objects
const myarro1 = arro.reduce((accumulator,currentValue)=>{
    // console.log(`Accumulator: ${accumulator} Current User Class: ${currentValue.class}`);
    return accumulator+currentValue.class
},0)
// console.log(myarro1);

const myarro2 = arro.reduce((acc,user)=>(acc+user.class),0)
// console.log(myarro2);

