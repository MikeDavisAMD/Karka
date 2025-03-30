const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
const count = arr =>arr.reduce((acc,num)=>{
    acc[num]=(acc[num] || 0)+1
    return acc
},{})
console.log(count(arr))