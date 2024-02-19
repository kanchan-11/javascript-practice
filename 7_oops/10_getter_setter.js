// getter setter-----------------------------------------------------------------------------------
/*  getter and setter are to be set together never alone
    setter never returns
    when both constructor is made to set a value and a setter is also defined then race condition arises 
    between the two to set the value */
class User1{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get password(){
        return this.password.toUpperCase()
    }
    set password(password){
        this.password = password
    }
}
// const kanchan  = new User1("kanchan@gmail.com","1234")
// console.log(kanchan.password);


// you can add (_) before name of each property it makes it like a privat property------------------
class User2{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get password(){
        return `###${this._password.toUpperCase()}###`
    }
    set password(password){
        this._password = password
    }
    get email(){
        return this._email
    }
    set email(email){
        this._email=email
    }
}
// const kanchan  = new User2("kanchan@gmail.com","1234")
// console.log(kanchan.password);
// console.log(kanchan.email);


// old method  => function based syntax-------------------------------------------------------------
function User3(email,password){
 this._email = email
 this._password= password

 Object.defineProperty(this,'email',{
    get: function(){
        return this._email
    },
    set: function(email){
        this._email = email
    }
 })

 Object.defineProperty(this,'password',{
    get: function(){
        return `###${this._password.toUpperCase()}###`
    },
    set: function(password){
        this._password = password
    }
 })
}

// const kanchan  = new User3("kanchan@gmail.com","1234")
// console.log(kanchan.password);
// console.log(kanchan.email);

// object based syntax-----------------------------------------------------------------------------

const User4={
    _email:"kanchan@gmail.com",
    _password:"1234",

    get email(){
        return this._email
    },
    set email(email){
        this._email=email
    },
    get password(){
        return `###${this._password.toUpperCase()}###`
    },
    set password(password){
        this._password=password
    }
}
// const kanchan  = new User4("kanchan@gmail.com","1234")
console.log(User4.password);
console.log(User4.email);

// it is not much used syntax but is useful to make new object on the basis of the existing ones
const shradha = Object.create(User4)
console.log(shradha.email);
console.log(shradha.password);
