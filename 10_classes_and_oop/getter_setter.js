class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toLowerCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}shreyash`
    }

    set password(value){
        this._password = value
    }
}

const shreyash = new User("S@shreyash.ai", "abc")
console.log(shreyash.email);