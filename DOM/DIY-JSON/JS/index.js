fetch("https://dummyjson.com/users").then(output => output.json()).then(out => {
    for(i=0;i<out.users.length;i++){
        // console.log(out.users[i])
        let body=document.querySelector(".tbd")
        let row=document.createElement("tr")
        row.innerHTML=`
        <td>${i+1}</td>
        <td>${out.users[i].id}</td>
        <td>${out.users[i].firstName}</td>
        <td>${out.users[i].lastName}</td>
        <td>${out.users[i].birthDate}</td>
        <td>${out.users[i].age}</td>
        <td>${out.users[i].email}</td>
        <td>${out.users[i].username}</td>
        <td>${out.users[i].image}</td>
        <td>${out.users[i].role}</td>
        <td><button onclick="edit(this)"><i class="fa-solid fa-pen-to-square"></i></button></td>
        <td><button onclick="del(this)"><i class="fa-solid fa-trash"></i></button></td>`
        body.appendChild(row)
    }
})
function edit(btn){
    let role=btn.parentNode.parentNode.children[9]
    if(btn.querySelector("i").className === "fa-solid fa-pen-to-square"){
        role.contentEditable=true
        btn.querySelector("i").className="fa-solid fa-floppy-disk"
    } else {
        role.contentEditable=false
        btn.querySelector("i").className="fa-solid fa-pen-to-square"       
    }
}
function del(btn){
    btn.parentNode.parentNode.remove()
    let row=document.querySelectorAll(".tbd tr")
    for(i=0;i<row.length;i++){
        row[i].children[0].innerHTML=i+1
    }
}