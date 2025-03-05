const arr = [1,2,3,4,5,6]
const arr2 = ["Hello",...arr,7]
const mrg = [...arr,...arr2]
console.log(arr2)
console.log(arr)
console.log(mrg)