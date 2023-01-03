let now = new Date()
console.log( now )

let startPCtime = new Date(0)
console.log(startPCtime)

let Dec31_1969 = new Date(-24 * 3600 * 1000)
console.log(Dec31_1969)

let date = new Date("2017-01-26")
console.log(date)

console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())
console.log(now.getFullYear())



let tuesday = new Date()
let lastDayOf2022 = new Date(`2022-12-31`)

console.log(`Unuudruus shine on garahad ${lastDayOf2022.getDate() - tuesday.getDate()} udur ${Math.abs(lastDayOf2022.getHours() - tuesday.getHours())} tsag ${Math.abs(lastDayOf2022.getMinutes() - tuesday.getMinutes())} minute baina`)

// console.log(lastDayOf2022.getDate() - tuesday.getDate())
// console.log(tuesday.getHours())

// console.log(Math.abs(lastDayOf2022.getHours() - tuesday.getHours()))

// console.log(Math.abs(lastDayOf2022.getMinutes() - tuesday.getMinutes()))
