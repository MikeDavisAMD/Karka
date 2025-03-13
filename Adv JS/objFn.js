const user=(({Name,Type}) => `${Name},${Type}`)
const users ={
        Name:"Karka Academy",
        Type:"Business"
}
console.log(user(users))