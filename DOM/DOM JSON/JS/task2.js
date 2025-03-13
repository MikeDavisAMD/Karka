fetch("../JSON/task2.json").then(output => output.json()).then(values => {
    let p=document.createElement("p")
    p.innerHTML=`PERSON NAME : ${values.person.Name}`
    document.getElementById("div").appendChild(p)
}).catch(err => console.error('Error fetching the JSON coma:', err));