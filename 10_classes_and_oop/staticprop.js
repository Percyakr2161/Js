class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const shreyash = new User("shreyash")
 //console.log(shreyash.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")

//console.log(iphone.createId()) 

// Note That 
 //createId is not a function

iphone.logMe()
