const person = {
		name: "Niko Agbo",
		age: 12,
		}

person.gender = "Male"

person.age = "21"

console.log(person)

console.log(Object.keys(person))

console.log(Object.entries(person))

const{age} = person;

console.log(age)



const prompt = require('prompt-sync')();

const name = prompt('What is your name?: ');
const ages = prompt('What is your age?: ');

if(ages < 18){
console.log("you're a child🤣");
} else{
console.log("you're an Adult😒");
}

console.log(`Hello, ${name}! your age is ${ages}...`);


