const arr=['apple', 'banana', 'cherry', 'date']
const lstr = arr => arr.reduce((current,longest)=>current.length >= longest.length ? current : longest)
console.log(lstr(arr))