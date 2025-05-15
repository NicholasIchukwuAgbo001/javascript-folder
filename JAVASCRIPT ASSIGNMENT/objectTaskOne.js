let student = {
     name : "John Doe",
        age : 20,
        courses : ["Math", "Physics", "Computer Science"],
        address : {
            city : "New Yowk",
            zip : 10001,

        },
}




console.log(`Student Name: ${student.name}`);
console.log(`Student curse: ${student.courses[1]}`);
console.log(`Student zip code: ${student.address.zip}`);

student.age = 23;

console.log(`Student Age ${student.age}`);

student.gpa = 3.8;

const getDetails = (name, age, gpa) =>{
    const result = `${student.name} is ${student.age} years old and has a GPA of ${student.gpa}.`;
    return result;
}

console.log(getDetails(student))