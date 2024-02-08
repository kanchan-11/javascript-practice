//array

const arr1 = [1,2,3,4,5]
const arr2 = ["a","bc","cde"]
const arr3 = new Array(1,34,56,78)
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// console.log(arr1[1]);
// console.log(arr2[2])
// console.log(arr3[3])

//Array methods

arr1.push(6)
arr1.push(7)
// console.log(arr1);

arr1.pop()
// console.log(arr1);

arr2.unshift(8)
arr2.unshift(10)
// console.log(arr2)

arr2.shift()
// console.log(arr2)

// console.log(arr2.includes("bcd"))
// console.log(arr2.includes("bc"));

// console.log(arr2.indexOf("a"));

const arr4 = arr2.join()
// console.log(arr4);
// console.log(typeof arr4);

//slice and splice

// console.log("A: ",arr1);
const a1 = arr1.slice(1,3)
// console.log("B: ",a1);
// console.log("A: ",arr1);

// console.log("A: ",arr1);
const a2 = arr1.splice(1,3)
// console.log("C: ",a2);
// console.log("A: ",arr1);

// arr3.push(arr2)
// console.log(arr3);
// console.log(arr3[4][2]);


const arr5 = arr3.concat(arr2)
// console.log(arr3);
// console.log(arr2);
// console.log(arr5);

const arr6  = [...arr2,...arr3]
// console.log(arr6);

const arr7 = [1,2,3,[4,5,6],[7,[8,[9,10]]]]
// console.log(arr7)
// console.log(arr7.flat(Infinity));

// console.log(Array.isArray("Kanchan"));
// console.log(Array.from("Kanchan"));
// console.log(Array.from({name:"Kanchan"}));

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3));