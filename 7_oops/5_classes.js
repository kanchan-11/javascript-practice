// classes is just a syntactic sugar and implemented since ES6 version-----------------------------

class User1{
    constructor(username,email,password)
    {
        this.username=username
        this.password=password
        this.email=email
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    toUpperCaseName(){
        return `${this.username.toUpperCase()}`
    }
}
const student = new User1("kanchan","kanchan@google.com","1234")
console.log(student.encryptPassword());
console.log(student.toUpperCaseName());

// behind the scene actual working-----------------------------------------------------------------

const User2=function(username,email,password){
    this.username=username
    this.password=password
    this.email=email
}
User2.prototype.encryptPassword=function(){
        return `${this.password}abc`
    }
User2.prototype.toUpperCaseName=function(){
        return `${this.username.toUpperCase()}`
    }

const student2 = new User2("shradha","shradha@google.com","5678")
console.log(student2.encryptPassword());
console.log(student2.toUpperCaseName());

