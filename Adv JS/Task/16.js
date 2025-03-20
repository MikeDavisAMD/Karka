const output = (a,b,c) => console.log(`${a}
${b}
${c}`)
const obj = { Name: 'Alice', age: 25, city: 'New York' }
let {Name,age,city} = obj
output(Name,age,city)