const arr = [10, 20, 30, 40, 50]
const avg = (avg => avg.reduce((acc,num)=>acc+num,0)/avg.length)
console.log(avg(arr))