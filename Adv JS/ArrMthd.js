const arr = Array("mike","Davis",1,2,5,6) // Array()
console.log(arr)
console.log(arr.fill(20,4,6)) //fill()
const a = Array.from("12323523412413") //from()
console.log(a)
console.log(a.indexOf("2",7)) //indexOf()
console.log(a.lastIndexOf("2")) //lastIndexOf()
console.log(a.includes("4")) //Array includes
const b=a.findIndex((data,index) => data>3 && index>5) //findIndex()
console.log(b)
const c=a.every(data => data>2) //every()
console.log(c)
const d=a.some(data => data>2) //some()
console.log(d)
const obj = [{
    Name:"Mike Davis",
    Place:"Nagercoil"
    },
    {
    Name:"Karka Academy",
    Place:"Nagercoil"
    }]
const e=obj.every(data => data.Place==="Nagercoil") //every()
console.log(e)
// Array Destructuring
const [n1,n2, ...n3] = a
console.log(n3)
// Object Destructuring
const [{Name: name1,Place: place1},{Name: name2,Place: place2}] = obj
console.log(name2)
const objt = {
    Name:"Karka Academy",
    Place:"Nagercoil",
    number: "12346"
    }
const {Name, ...rest} = objt
console.log(rest)