let a=10
const b=20
var c=30
// console.log(a); // 10 global value
// console.log(b); // 20 global value
// console.log(c); // 30 global value

if(true)
{
    let a=100
    const b=200
    var c=300
    // console.log(a); // 100 block value
    // console.log(b); // 200 block value
    // console.log(c); // 300 block value
}
// console.log(a); //10 global value
// console.log(b); // 20 global value
// console.log(c); // 300 block value

/* var creates problem in scope as it assumes the new value even out of its scope
    let and const works normal inside a block only block level*/

const s=7;
// console.log(s); // 7
// s=10  //Assignment to constant variable (error)
// console.log(s); // 7
/* cannot change the value a const after initialization*/


// let 

let l = 7
// console.log(l); // 7
l=10
// console.log(l); // 10
/* value of let can be changes also */
if(true)
{
    // console.log(l); // error 
    l=16 
    // console.log(l); // 16
}
/* global l values can also be accessed inside a block and changes inside the block
    but if it is again declared in a block then the block value is considered
    any let value cannot be accessed before it's declaration in that block even there is already a global value */


// const

// console.log(t); // error
const t = 7
// console.log(t) // 7
if(true)
{
    // console.log(t) // error 
    const t=6
    // console.log(t) // 6
}
/* global t values can also be accessed inside a block 
    but if it is again declared in a block then the block value is considered
    any const value cannot be accessed before it's declaration in that block or globally*/

function one(){
    const name = "kanchan"
    function two(){
        const surname = "agarwal"
        // console.log(name); //kanchan
    }
    // console.log(surname) // error(out of scope)
    two()
}
one()

if(true)
{
    const name = "kanchan"
    if(name==="kanchan")
    {
        const surname="agarwal"
        // console.log(name+surname); // kanchanagarwal
    }
    // console.log(surname); error (out of scope)
}
// console.log(name); // error (out of scope)

