const t34 = [4, 6, 8, 9, 11, 15]
const prime = (num) => {
    if(num<2) return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0) return false
    }
    return true
}
const t34o = (data => data.find(data => prime(data)))
console.log(t34o(t34))