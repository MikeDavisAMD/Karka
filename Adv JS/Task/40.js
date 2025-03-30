const arrObj=[
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 700 }
    ]
const out = (arr) =>{
    const avg = arr.reduce((acc,{price})=>acc+price,0)/arr.length
    console.log(arr.filter(({price}) => price>avg).map(({name})=>name))
}
out(arrObj)