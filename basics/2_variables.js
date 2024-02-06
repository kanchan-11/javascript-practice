const accountId=34 // whose value cannot be changed
var accountName="Kanchan" // value can be changed but var is not used because of block scope and functional scope problem 
let accountEmail="kanchan@gmail.com" // value can be changed and mostly used to declare variables
accountPassword="12345" // value can be changed but avoid declaring variables like this
let accountState // without assigning a value it is of type undefined

console.table([accountId,accountName,accountEmail,accountPassword,accountState])

// accountId=78 // if changed give error
accountName="Shradha"
accountEmail="shradha@gmail.com"
accountPassword="67890"
accountState=false

console.table([accountId,accountName,accountEmail,accountPassword,accountState])