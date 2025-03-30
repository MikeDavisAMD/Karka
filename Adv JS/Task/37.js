const joiner = (sep,...rest)=>rest.join(sep)
console.log(joiner('-', 'apple', 'banana', 'cherry'))
console.log(joiner(',', 'apple', 'banana', 'cherry'))