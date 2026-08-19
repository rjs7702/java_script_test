let score=33;
let score2="33";
let score3="33abc";
let score4=true;

let result=Number(score) //33
let result2=Number(score2) //33
let result3=Number(score3) //NaN
let result4=Number(score4) //1

console.log(result)
console.log(result2)
console.log(result3)
console.log(result4)

let answer=String(score) //33
let answer2=String(score2) //"33"
let answer3=String(score3) //"33abc"
let answer4=String(score4) //"true"

console.log(answer)
console.log(answer2)
console.log(answer3)
console.log(answer4)

let finalResult=Boolean(score) //true
let finalResult2=Boolean(score2) //true
let finalResult3=Boolean(score3) //true
let finalResult4=Boolean(score4) //true 
console.log(finalResult)
console.log(finalResult2)
console.log(finalResult3)
console.log(finalResult4)   


let someNumber=33;
let stringNumber=String(someNumber) 
console.log(typeof someNumber) //number
console.log(typeof stringNumber) //string