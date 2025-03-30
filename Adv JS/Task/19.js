arr=[1, 2, 3, 4, 5]
const sum = arr => arr.reduce((acc,num)=>acc+num,0)
console.log(sum(arr))