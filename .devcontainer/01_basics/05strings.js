const name="Raju Singh";
const repoCount=2;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //string interpolation

const gameName= new String ('RAJU-SINGH')

console.log(gameName)


console.log(gameName[0])

console.log(gameName.__oroto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('U'));

//String Slicing

const newString=gameName.substring(0,3);
console.log(newString);

const anotherString =gameName.slice(-1,3);
console.log(anotherString);
