// singleton when object declared through constructor
//Object.create

//object literal

const  mysym=Symbol("key1")

const user={

    name: "Raju ",
    "full name":"raju singh",
    [mysym]: "mykey1",
    age:26,
    location: "jaipur",
    email: "xyz@gmail.com",
    isloggedin: true,
    lastloginday:["mon","wed"]

}

//object access

console.log(user.email)
console.log(user["email"])
console.log(user["full name"])
console.log(user.mysym)
console.log(user[mysym])
console.log(typeof user.mysym)

user.email="abc@gmail.com"  //to cahnge value

console.log(user.email)

//Object.freeze(user)
user.email="zxy@gmail.com"

console.log(user.email)
//console.log(user)

user.greeting= function(){
    console.log("Hello Users")
}

user.greeting2=function(){
    console.log(`hello, ${this.name}`)
}

console.log(user.greeting())
console.log(user.greeting2())