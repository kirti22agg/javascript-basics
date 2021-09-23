// arrow functions

// function add(x,y){
    // return x+y
// }
// console.log(add(10,20))

// let add = function(x,y){
//     return x+y
// }

// console.log(add (10,20))

let add =(x,y)=> x+y
console.log(add(10,20))

const counter ={
    count:0,
    next: function() {
        return ++(this.count)
    },
    key: this.count 
}
console.log(counter)
console.log(counter.count)
console.log(counter.next)
console.log(counter.next ())
console.log(counter.next ())
console.log(counter.key)



















































































