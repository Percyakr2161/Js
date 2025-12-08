//inheritance in js 

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const percy = new Teacher("percy", "percy@teacher.com", "123")

percy.logMe()

const robotMachine = new User("robotMachine")

robotMachine.logMe()

console.log(percy instanceof User);