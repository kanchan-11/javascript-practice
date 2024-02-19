function setUsername(username){
    // complex db calls
    console.log("setting username");
    this.username  = username
}

function createUser(username,email,password){
    // setUsername(username) // this function gets called but its refernce is lost after function execution completes
    setUsername.call(this,username) // now the reference of the setUsername() get stored in this of createUser
    this.email=email
    this.password=password
}

const user = new createUser("kanchan","kanchan@google.com","2344")
console.log(user);