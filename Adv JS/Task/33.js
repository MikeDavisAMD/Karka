const employees = [
    { id: 1, name: 'Alice', position: 'Manager' },
    { id: 2, name: 'Bob', position: 'Engineer' },
    { id: 3, name: 'Charlie', position: 'Technician' }
];
const findEmployeeById = ((data,key) => data.find(data => data.id===key))
console.log(findEmployeeById(employees, 2));