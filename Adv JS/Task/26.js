const cart = [
    { item: 'apple', price: 1.5 },
    { item: 'banana', price: 2.0 },
    { item: 'orange', price: 1.25 }
];
const calculateTotal = (data => data.reduce((acc,num)=>acc+num.price,0))
console.log(calculateTotal(cart))