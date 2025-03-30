// Largest of the string
const arr = ['Apple','Pineapple']
const lstr = arr => arr.reduce((current,longest)=>current.length>longest.length ? current : longest,"")
console.log(lstr(arr))
// intersection of two array
const arr1=[1,2,3,1]
const arr2=[1,2]
const intersection = (arr1,arr2) => [...new Set(arr1.filter(num => arr2.includes(num)))]
console.log(intersection(arr1,arr2))