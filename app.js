
// Testing
/**

Arguments : String: FirstName, String: LastName, string: Language, 
**/
var s = S$('John', 'Doe', 'rs');

console.log('Full Name: ', s.fullName());
console.log('Validate: ', s.validate());
console.log('Informal Greeting:', s.greeting());
console.log('Formal Greeting:',s.formalGreetings());
// formal greet
s.greet();
// informal greet
s.greet(true);
// Example where chaning can be done to methods
s.greet().setLang('fr').greet();

