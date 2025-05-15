/*const prompt = require('prompt-sync')();
let input = prompt("what is the weather like(raining, sunny, cloudy)??: ").toLowerCase();

switch (input) {
    case "raining":
        console.log("Remember to bring an umbrella.")
        break;
    case "sunny":
        console.log("Dress lightly.");
        break;
    case "cloudy":
        console.log("Go outside, you're good.");
        break;
    default:
        console.log("Unknown weather.");
        break;
}
*/



const prompt = require('prompt-sync')();
const weatherAdvice = {
    raining: 'Remember to bring an umbrella.',
    sunny: 'Dress lightly.',
    cloudy: "Go outside, you're good.",
};
const input = prompt('What is the weather like (raining, sunny, cloudy)??: ').toLowerCase();

console.log(weatherAdvice[input] || 'Unknown weather.');
