function clickHandle(){
    let d=document.getElementById("div")
    let inp=document.getElementById("input").value
    let list=document.createElement("li")
    input=`${inp} <button onclick="edit(this)">EDIT</button>
    <button onclick="del(this)">DELETE</button>`
    list.innerHTML=input
    d.appendChild(list)
    document.getElementById("input").value=""
}
function edit(li){
    let text = li.parentNode.parentNode;
    let newText = prompt(text);
    if (newText !== "" && newText!== null) {
        li.firstChild.nodeValue = newText+" "; 
    }
}
function del(a){
    a.parentNode.remove()
}