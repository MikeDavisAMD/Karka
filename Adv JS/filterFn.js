const arr=[2,4,51,34,52,55,67,90]
const output=arr.filter(num => num%2 == 0)
console.log(output)
const out=arr.filter(num => {
    return num%2 != 0
})
console.log(out)
const numbers = [1,2,3,4,5,6]
const fn=numbers.filter(data => data%2 == 0).map(num => num/2)
console.log(fn)
const fruits = ["kiwi","Apple","Orange","Banana","Pineapple"]
const ftr = fruits.filter(data => data.length > 5)
console.log(ftr)
const fltr = fruits.filter(data => {
    return data.length <= 5
})
console.log(fltr)
// task5.js
// task6.js