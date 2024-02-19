class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`)
    }
}
class Teacher extends User{
    constructor(username,email,password)
    {
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacher1 = new Teacher("kanchan","kanchan@gmail.com","1234")
console.log(teacher1);
teacher1.logMe() // this function comes from parent class User
teacher1.addCourse() 

const user1 = new User("sharadha","shradha@gmail.com","1234")
console.log(user1);
user1.logMe()
// user1.addCourse() // it does not this function in User class

console.log(user1===teacher1); // False=> these are instances so cannot be equal
console.log(teacher1===Teacher); // False=> teacher1 is an instanceof Teacher not equal it
console.log(user1===User); // False=> user1 is an instanceof User not equal it
console.log(teacher1 instanceof Teacher); // True
console.log(teacher1 instanceof User);// Ture=> teacher1 is instanceo of Teacher which is the child of User
console.log(user1 instanceof User); //Ture
console.log(user1 instanceof Teacher); // False=> User is parent of Teacher so not instance of Teacher