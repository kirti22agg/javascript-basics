const balls = document.querySelectorAll('.ball')
const body= document.querySelector('body')

balls.forEach( (ball,iteration)=>{
    const value = iteration*50
    ball.style = `transform:translateY(${value}px)`
})

let age = 20
let Name = "Kirti"
console.log(` Hi ${Name} Your age is ${age}`)





