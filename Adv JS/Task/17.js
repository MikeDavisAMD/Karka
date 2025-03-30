arr=[5,20]
const [a,b,c=10]=arr
const def = () => (`${a+b}
${a+c}`)
console.log(def())