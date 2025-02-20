let arr=["Karka", "Academy", 2025]
localStorage.setItem("Array",JSON.stringify(arr))
let a=(JSON.parse(localStorage.getItem("Array")))
for(let i=0;i<a.length;i++){
    console.log(a[i])
}
let obj={
    Name:"Mike",
    Age:"25"
}
localStorage.setItem("object",JSON.stringify(obj))
console.log(JSON.parse(localStorage.getItem("object")))