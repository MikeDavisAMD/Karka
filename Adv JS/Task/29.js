const products = [
    { id: 101, name: 'Laptop' },
    { id: 102, name: 'Phone' },
    { id: 103, name: 'Tablet' }
];
const findProductById =((data,key) => data.find(data => data.id === key))
console.log(findProductById(products, 102))