function clickHandle(){
    let d=document.getElementById("div")
    let input=document.getElementById("input").value
    let list=document.createElement("li")
    btn=`<button onclick="edit()">✏️</button>
    <button onclick="del(parentNode)">🗑️</button>`
    list.innerHTML=input+" "+btn
    d.appendChild(list)
    document.getElementById("input").value=""
}
function edit(list){
    
}
function del(a){
    a.remove()
}