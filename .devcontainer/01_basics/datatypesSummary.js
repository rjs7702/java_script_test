// primitive data types
// number, string, boolean, undefined, null, symbol, bigint


// dynamically typed language=> we don't need to specify the data type of a variable while declaring it. It will be determined by the value assigned to it.

const score=33;
const score2=33.3;
const isLoggedIn=true;
const outSideTemp=null;
let userEmail=undefined;

const id=Symbol("123");
const anotherId=Symbol("123");

console.log(id===anotherId) //false because symbol is unique and immutable value

const bigNumber=9007199254740991n; //bigint

console.log(bigNumber) //9007199254740991n



// non-primitive data types or refrence data types
// object, array, function


const heros=["shaktiman","nagraj","doga"]
{
    name="Raju Singh",
    age=22,
    isLoggedIn=false
}

const myfunction=function(){
    console.log("Hello, World!");

}

console.log(typeof heros) //object
console.log(typeof myfunction) //function
console.log(typeof {}) //object