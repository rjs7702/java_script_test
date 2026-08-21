////dates

//let myDAte= new Date()
//console.log(myDAte.toString())
//console.log(myDAte.toISOString())
//console.log(myDAte.toJSON())
//console.log(myDAte.toLocaleDateString())
//console.log(myDAte.toLocaleString())
//console.log(myDAte.toLocaleTimeString())
//console.log(myDAte.toUTCString())
////console.log(myDAte.getTimezoneOffset())
//console.log(typeof myDAte)

////let myNewDate= new Date(2026,0,23)
//let myNewDate= new Date("2026-01-14")
////console.log(myNewDate.toDateString())

//let myTimesStamp= Date.now()
//console.log(myTimesStamp)

//console.log(myNewDate.getTime())

//console.log(Math.floor(Date.now()/1000))

let newDAte= new Date()

console.log(newDAte)

console.log(newDAte.getDay())

newDAte.toLocaleString('default',{
    weekday: "long",
    timeZone: ''
})
