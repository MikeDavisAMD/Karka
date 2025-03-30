const arr=[1, 2, 3, 4, 5, 6]
const out=arr=>arr.filter(data=>data%2==0).map(data=>data**2)
console.log(out(arr))