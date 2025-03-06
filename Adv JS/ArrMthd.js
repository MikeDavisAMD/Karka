const arr = Array("mike","Davis",1,2,5,6)
console.log(arr)
console.log(arr.fill(20,4,6))
const a = Array.from("12323523412413")
console.log(a)
console.log(a.indexOf("2",7))
console.log(a.lastIndexOf("2"))
console.log(a.includes("4"))
const b=a.findIndex((data,index) => data>3 && index>5)
console.log(b)
const c=a.every(data => data>2)
console.log(c)
const d=a.some(data => data>2)
console.log(d)
const obj = [{
    Name:"Mike Davis",
    Place:"Nagercoil"
    },
    {
    Name:"Karka Academy",
    Place:"Nagercoil"
    }
]
const e=obj.every(data => data.Place==="Nagercoil")
console.log(e)