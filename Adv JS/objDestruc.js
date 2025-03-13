// Nested object destructuring
const users =[{
    "user1":{
        "Name":"Mike Davis",
        "Type":"Personal"
    },
    "user2":{
        "Name":"Karka Academy",
        "Type":"Business"
    }
}]
let [{user1:{Name:N1,Type:T1},user2:{Name:N2,Type:T2}}] = users
console.log(`User ${N1} has a ${T1} account`)
console.log(`User ${N2} has a ${T2} account`)