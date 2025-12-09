const User = {
    _email: 'percy@akr.com',
    _password: "1234",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const percy = Object.create(User)
console.log(percy._password);

