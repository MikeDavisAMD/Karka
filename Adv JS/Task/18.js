arr=[1, 2, 3, 4, 5]
const [...rest]=arr
const res = () => rest.reduce((acc,num)=>acc+num,0)
console.log(res())