// let myName = "Shreyash     "
// let mychannel = "Percy     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shreyash = function(){
    console.log(`shreyash is present in all objects`);
}

Array.prototype.heyShreyash = function(){
    console.log(`Shreyash says hello`);
}

//heroPower.shreyash()
//myHeros.shreyash()
//myHeros.heyShreyash()
//heroPower.heyShreyash()

// inheritance

const User = {
    name: "percy",
    email: "percy@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "PercyAKR     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"shreyash".trueLength()
"iceTea".trueLength()