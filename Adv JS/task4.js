const arrobj = [
    {
        Name:"Mike Davis",
        Place:"Nagercoil",
        Age:"24"
    },
    {
        Name:"Karka Academy",
        Place:"Nagercoil",
        Age:"20"
    }
]
const out = arrobj.map(data => data)
console.log(out)
const outName = arrobj.map(data => `Name: ${data.Name}`)
console.log(outName)
const NameOut = arrobj.map(data => {
    return `Name: ${data.Name}`
})
console.log(NameOut)
const NOut = arrobj.map(data => `Name: ${data.Name}, Place: ${data.Place}, Age: ${Number(data.Age)+1}`)
console.log(NOut)