fetch("../JSON/task1.json").then(output => output.json()).then(values => {
    let p=document.createElement("p")
    p.innerHTML=`PERSON NAME : ${values.person.Name}`
    document.getElementById("div").appendChild(p)
})