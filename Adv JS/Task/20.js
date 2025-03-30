arr=[1, 2, 3, 4, 5]
const prod = arr => arr.reduce((acc,num)=>acc*num,1)
console.log(prod(arr))