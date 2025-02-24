function clickHandle(){
    let d=document.getElementById("div")
    let inp=document.getElementById("input").value
    let list=document.createElement("li")
    input=`<span>${inp}</span> <button onclick="edit(this)"><i class="fa-solid fa-pen-to-square"></i></button>
    <button onclick="del(this)"><i class="fa-solid fa-trash"></i></button>`
    list.innerHTML=input
    d.appendChild(list)
    document.getElementById("input").value=""
}
function edit(btn){
    let list = btn.parentNode.querySelector("span");
    if(btn.querySelector("i").className==="fa-solid fa-pen-to-square"){
        list.contentEditable=true
        btn.querySelector("i").className="fa-solid fa-floppy-disk"
    } else {
        list.contentEditable=false
        btn.querySelector("i").className="fa-solid fa-pen-to-square"
    }
}
function del(btn){
    btn.parentNode.remove()
}