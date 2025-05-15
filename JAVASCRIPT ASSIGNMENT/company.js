let company = {
    name : "TechCorp",
    location : "San Francisco",
    employees : [
        {
            id : 1037483,
            name : "Niko",
            department : "Engineering",

        },

        {
            id : 2137483,
            name : "John",
            department : "HR",

        },

        {
            id : 31037483,
            name : "Moses",
            department : "Marketing",

        },

        {
            id : 4137483,
            name : "Gardus",
            department : "Manager",

        }

    ]
}

console.log(`Second Employee Name: ${company.employees[1].name}`)

console.log(`Comapny name: ${company.name}, company location: ${company.location}`)

for (let employeeDetails in company.employees) {
    console.log(`${company.employees[employeeDetails].name} === ${company.employees[employeeDetails].department}`);
}