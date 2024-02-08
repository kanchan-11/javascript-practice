// comparision operators : <, >, <=, >=, ==, !=, ===(strict => to check type also), !==

// if
// if-else
// if-else-if
// switch-case
// Ternary Operator

//-------------------------------------------truethy values------------------------------------------
// "0", 'false", " ", [], {}, function(){}

//---------------------------------------------falsey values-----------------------------------------
// false, 0, -0, BigInt 0n, null, undefined, NaN

//--------------------------------------check if arr is empty----------------------------------------
// arr=[1,2,3,4]
// arr=[]
// if(arr.length===0)
//     console.log("array is empty");
// else
//     console.log(arr);

//--------------------------------------check if object is empty------------------------------------- 
// const obj={}
// if(Object.keys(obj).length===0)
//     console.log("object is empty");
// else
//     console.log(obj);

//---------------------------------------------------------------------------------------------------
// console.log(false==0);
// console.log(false == '')
// console.log(0=='')

//----------------------Nullish Coalescing Operator (??) : null undefined----------------------------
/* it is used in case when a variable may get a null or undefined value 
    but we do not want that null or undefined 
    instead some other default value to prevent null or undefined */
let val1
val1 = 5 ?? 10
// console.log(val1)
val1 = null ?? 10
// console.log(val1)
val1 = undefined ?? 15
// console.log(val1);
val1 = null ?? undefined ?? "-"
// console.log(val1)

key =1
switch (key) {
    case 1:
        console.log(key);
        break;
    default: // is run when none of the cases match or due to fall through
        console.log("-1");
        break;
}