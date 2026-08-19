const accountId=144553
let accountEmail="arav.rjs77@gmail.com"
var accountPassword="123456"
accountCity="Jaipur"

// accountId=2 //not allowed because accountId is a constant
accountEmail="hc@gmail.com"
accountPassword="654321"
accountCity="Delhi"
let accountState;

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

/*
preferred not to use var beacause it is function scoped and can be redeclared and updated.
 */

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);