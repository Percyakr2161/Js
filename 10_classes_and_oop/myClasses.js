// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const percy = new User("percy", "percy@gmail.com", "123")

console.log(percy.encryptPassword());
console.log(percy.changeUsername());

// behind the scene

function User1(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User1.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const shre = new User1("shre", "shre@gmail.com", "123")

console.log(shre.encryptPassword());
console.log(shre.changeUsername());