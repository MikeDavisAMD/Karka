const arr = [1,2,3,4,5]
// Normal Function
function normalfn(arr) {
    let b=[]
    arr.forEach(element => {
        b.push(element**2)
    });
    console.log(b)
}
normalfn(arr)
// Arrow Function
const arrFn = (arr => arr.map(data => data**2))
console.log(arrFn(arr))