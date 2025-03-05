const a={
    Name:"Mike Davis",
    Age:"25"
}
const b={
    place:"Nagercoil",
    role:"web developer"
}
const c={...a,...b,Age:"24"}
console.log(c)