const arr=[[1, 2, 3], [4, 5], [6, 7, 8, 9]]
const flat = (arr => arr.reduce((acc,num)=> acc.concat(num),[]))
console.log(flat(arr))