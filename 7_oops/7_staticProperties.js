class User1{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`)
    }
    createId(){
        return `123`
    }
}

const kanchan = new User1("kanchan")
// console.log(kanchan.createId()); // since it is not static it can be accessed easily

class User2{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`)
    }
    static createId(){
        return `123`
    }
}

const shradha = new User2("shradha")
// console.log(shradha.createId()); // since createId() is declared static it cannot be accessed

class Teacher extends User2{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const neha = new Teacher("neha","neha@google.com")
console.log(neha.logMe());
// console.log(neha.createId()); // since createId() is declared static it cannot be accessed by child