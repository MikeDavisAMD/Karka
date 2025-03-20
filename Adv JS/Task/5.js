const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape']
const fltr= arr => arr.filter(data => data.length > 5)
console.log(fltr(fruits))