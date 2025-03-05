const arr=[23,45,56,234,756]
const out = arr.map((data,index) => `index: ${index}, data: ${data}`) // Variable => variable
console.log(out)
// arrow function method
const arout = arr.map((data,index) => {
    return {index,data}
})
console.log(arout)
const a=[1,2,3,4]
const b = a.map(data => 2*data)
console.log(b)
const c = a.map(data => {
    return 2*data
})
console.log(c)
const d = a.map(data => data-1)
console.log(d)
const e = a.map(data => {
    return data-1
})
console.log(e)
// task4.js