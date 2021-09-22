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

