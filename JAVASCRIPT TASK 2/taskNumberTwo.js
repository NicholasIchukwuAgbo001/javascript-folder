

function properties(obj) {

    for (let key in obj) {

        console.log(`${key}: ${obj[key]}`);

    }
}

const car = { 
	     make: 'Toyota',
	     model: 'Camry',
	     year: 2021 
	     };


properties(car);

