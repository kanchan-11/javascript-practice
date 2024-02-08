// method 1
function addTwoNums1(num1,num2)
{
    console.log(num1+num2);
}
// addTwoNums1(5,7)

// method 2
function addTwoNums2(num1,num2)
{
    let sum = num1+num2;
    return sum
}
const result = addTwoNums2(5,7)
// console.log(result);

// method 3
function addTwoNums3(num1,num2)
{
    return num1+num2; 
}
// console.log(addTwoNums3(5,7));

function message1(username)
{
    return `hello ${username}.`
}
// console.log(message1("KANCHAN"));
// console.log(message1());

function message2(username)
{
    if(username=== undefined)
    {
        console.log("Please enter a username");
    }
    else
    {
        console.log(`Hello ${username}.`)   
    }
}
// message2("Kanchan")
// message2()

function message3(username)
{
    if(!username)
        return "Please enter a username"
    return `Hello ${username}`
}
// console.log(message3("kanchan"));
// console.log(message3());

function getPrice(num)
{
    return num
}
// console.log(getPrice(200,300,400));  
// more than required parameters are sent then only the starting ones are considered others dropped

function getPrice2(...num)
{
    return num
}
// console.log(getPrice2(200,300,400));
// now any number of parameters can be sent as arguments all will be handled by ...

function getPrice3(num1,num2,...num3)
{
    console.log(num1);
    console.log(num2);
    return num3
}
// console.log(getPrice3(100,200,300,400));

const user={
    username:"kanchan",
    id:"123k"    
}

function handleObject1(object)
{
    console.log(`Username: ${object.username} id: ${object.id}`);
}
// handleObject1(user)

function handleObject2(object)
{
    console.log(`Username: ${object.username} id: ${object.ids}`);
}
// handleObject2(user)
//the name of attributes of object should be same otherwise undefined will be returned for any other attribute

function printArr(arr)
{
    console.log(arr);
}
// printArr([1,2,3,45,6])
arr = [5,6,7,8]
printArr(arr)