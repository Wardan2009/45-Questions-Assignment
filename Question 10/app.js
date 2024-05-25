// WARDAN AHMED
// 23/MAY/2024 
var personName = "Wardan Ahmed";
//lower Case
console.log("lowercase:", personName.toLowerCase());
//upper case
console.log("upper case:", personName.toLocaleUpperCase());
//Title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
// WARDAN AHMED
// 23/MAY/2024
//printing a message by using a variable
var personName1 = "WARDAN";
console.log("hello ".concat(personName1, " would you like to learn some python today?"));
