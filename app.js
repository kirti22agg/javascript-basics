// map

let ranks = [1, 2, 3, 4, 5, 6]
// const newArr= ranks.map((e)=>e+1)
// const newArr = ranks.map((e) => { return e + 1 })
console.log(
    ranks.map((e, index) => {
        return (e)
    })
)
console.log(
    ranks.map((e, index) => {
        return (index)
    })
)


// console.log(newArr)

let newmapArr = ranks.map((e, index) => {
    if (e % 2 == 0)
        return e
})

console.log(newmapArr)

// filter

let newfilterArr = ranks.filter((e, index) => {
    if (e % 2 == 0)
        return e
})

console.log(newfilterArr)




























































































