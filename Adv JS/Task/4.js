const arr = [1, 2, 2, 3, 4, 4, 5]
const output = arr => console.log(Array(...new Set(arr)))
output(arr)