const prompt = require('prompt-sync')();

let passwordLength = prompt("Enter password length: ")

let uppercase = prompt("include uppercase?(y/n): ");

let lowercase = prompt("include lowercase?(y/n): ");

let numbers = prompt("include number?(y/n): ");

let space = '';

if(uppercase) space += 'ABCDEFGHIJKLMNOPQRSTUVWSYZ';

if(lowercase) space += 'abcdefghijklmnopqrstuvwxyz';

if(numbers) space += '0123456789';

let password = '';

for (let i = 0; i < passwordLength; i++) {
  let randomPassword = Math.floor(Math.random() * space.length);
  password += space.charAt(randomPassword );
};

console.log(password);
