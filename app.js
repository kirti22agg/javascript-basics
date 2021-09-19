const rock=document.querySelector('#rock')
const paper=document.querySelector('#paper')
const scissors=document.querySelector('#scissors')
const board=document.querySelector('#board')



//  const handler= (action) => {
//      console.log("You clicked " + action)
//  }


//  rock.addEventListener('click', () => {
//     handler('rock')
//  })
//  paper.addEventListener('click', () => {
//      handler('paper')
//  })
//  scissors.addEventListener('click', () => {
//      handler('scissors')
//  })


//  const handler= (event) => {
    
//     const action = event.target.id
//     if (action == 'rock') {
//         board.innerHTML = "rock crushes scissors"
//     }else if (action == 'paper') {
//         board.innerHTML = "paper traps rock"
//     }else if (action == 'scissors') {
//         board.innerHTML = "scissors cut paper"
//     }else {
//         board.innerHTML = "click something"
//     }
// }
const handler= (event) => {
const action = event.target.id

switch(action){
    case "rock":
        board.innerHTML = "rock crushes scissors"
        break
    case "paper" :
        board.innerHTML = "paper traps rock"
        break
    case "scissors":
        board.innerHTML = "scissors cut paper"
        break
    default:
        board.innerHTML = "click something"


} }


rock.addEventListener('click', handler)
paper.addEventListener('click',  handler)
scissors.addEventListener('click', handler)




