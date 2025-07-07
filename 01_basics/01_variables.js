const accountId = 14453
let accountEmail = "monalisa.com"
var accountPassword ="12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed
accountEmail = "hello.com"
accountPassword = "78628"
accountCity = "Kolkata"
let accountState;
/*
don't use var due to problem in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])