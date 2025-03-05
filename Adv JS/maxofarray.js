const num = [10,20,60,40,50]
const max = num.reduce((acc,num) => acc>num ? acc : num ,0)
console.log(max)