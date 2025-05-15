/*
let array = [] //literal method
array[0] = 1;
array[1] = "niko";
array[2] = true;
array[3] = {name : "sule", age : 10}
array[4] = [2,3,4,5,5]
console.log(array)
console.log(array[3])
*/

/*
let array = new Array(1,2,3,4,5);

console.log(array);
console.log(array.length);

array.push(5);
console.log(array)

console.log(array.length);
*/

/*
let input = "07058705863";
let answer = input.slice(1)
console.log(answer)
*/

let arrays = [["Car", 2000], ["Truck", 500], ["Bike", 6500]];

let scot = ["Scooter", 1500];
arrays.push(scot)

let toyota = ["Toyota", "Nissan"]
arrays[0].push(toyota)

let ford = ["Ford"]
arrays[1].push(ford)

let honda = ["Honda"]
arrays[2].push(honda)

console.log(arrays)