const students = [
    { Name: 'Alice', score: 85 },
    { Name: 'Bob', score: 92 },
    { Name: 'Charlie', score: 78 }
];
const output = arr => new Map(arr.map(({Name,score})=>[Name,score]))
console.log(output(students).get('Bob'))