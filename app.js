console.log ("MERGED CLASS 1")
// array destructuring

var arr = [1,2,3,4]

var [one,two,three]= arr
console.log(three)

function getscores() {
    return [90,100]
}

let [x,y,z] = getscores()
console.log(x)
console.log(y)
console.log(z)

// object destructuring

const obj={
    Name: "Kirti Aggarwal",
    email: "kirti22agg@gmail.com",
    age: 20
}

// console.log(obj.email)

let {Name,email,age,num} = obj
console.log(email)
console.log(num)

let person ={
    firstname: "Kirti",
    lastname: "Aggarwal",
    age1: 20

}
let{firstname,lastname,age1,middlename=""}= person
console.log(firstname)
console.log(lastname)
console.log(age1)
console.log(middlename)


