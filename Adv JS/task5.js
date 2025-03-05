const arrobj = [
    {
        Name: "Mike Davis",
        Age: "24"
    },
    {
        Name: "Syed Ahamed",
        Age: "27"
    },
    {
        Name: "Alfred Chris",
        Age: "8"
    },
    {
        Name: "Tom Clancy",
        Age: "16"
    }
]
const out = arrobj.filter(data => data.Age > 18).map(data => `Name: ${data.Name}`)
console.log(out)