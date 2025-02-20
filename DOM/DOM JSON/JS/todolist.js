function clickHandle(){
    let d=document.getElementById("div")
    let inp=document.getElementById("input").value
    let list=document.createElement("li")
    input=`${inp} <button onclick="edit(parentNode)">EDIT</button>
    <button onclick="del(parentNode)">DELETE</button>`
    list.innerHTML=input
    d.appendChild(list)
    document.getElementById("input").value=""
}
function edit(li){
    let text = li.firstChild.nodeValue;
    let newText = prompt(text);
    if (newText !== "" && newText!== null) {
        li.firstChild.nodeValue = newText+" "; 
    }
}
function del(a){
    a.remove()
}