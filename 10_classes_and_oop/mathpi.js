const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const percy = {
    name: 'Robot Machine',
    price: 2500,
    isAvailable: true,

    orderPercy: function(){
        console.log("Robot Machine is not available ");
    }
}

console.log(Object.getOwnPropertyDescriptor(percy, "name"));

Object.defineProperty(percy, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(percy, "name"));

for (let [key, value] of Object.entries(percy)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}