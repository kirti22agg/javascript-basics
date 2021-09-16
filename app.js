// const rock=document.querySelector('#rock')
// const paper=document.querySelector('#paper')
// const scissors=document.querySelector('#scissors')

function logName(Name = "Enter your name"){
    // console.log("Kirti")
    console.log(Name)
}

// logName("Kirti")
logName()

function nameage(Name="John Doe", age = 18){
    console.log(Name+ " You are " + age)
}
nameage()

function add(a=0,b=0){
    const sum=a+b
    return sum
}
const result =add(12,99)
console.log(result)
