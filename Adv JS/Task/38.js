const arr1=[1, 2, 3]
const arr2=[3, 4, 5]
const out=(arr1,arr2)=>console.log(Array(...new Set (Array(...arr1,...arr2))))
out(arr1,arr2)