// promises
let concert = false
let attendConcert = new Promise(
    function (resolve, reject) {
        setTimeout( () => {
            if (concert) {
                resolve("BOB ATTENDED THE CONCERT")
            }
            else {
                reject ("BOB FAILED TO ATTEND THE CONCERT")
            }
        }, 2000 )
    }
)

console.log(attendConcert)

// attendConcert.catch((error)=> console.log(error))
// attendConcert.then((data)=> console.log(data))

// attendConcert.then((data)=> console.log(data)).catch((error)=> console.log(error))

async function afunc() {
    try{
        let result = await attendConcert
        console.log(result)
    }
    catch(err) {
        console.log(err)
    }

    
    
}

afunc()

// arrow notation (try using this as much as possible)

// const afunc = async() =>{
//     let result = await attendConcert()
//     return result

// }

console.log("HI.I WON'T WAIT FOR ANYONE!")































































































