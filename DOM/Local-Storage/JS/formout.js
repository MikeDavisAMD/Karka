let out=document.getElementById("out")
let p=document.createElement("p")
let o=JSON.parse(localStorage.getItem("Values"))
p.innerHTML=`First Name: ${o.fname}<br>Last Name: ${o.lname}<br>
Email: ${o.mail}<br>Password: ${o.pwd}<br>Gender: ${o.gender}<br>
Skills: ${o.Skills}<br>Country: ${o.country}<br>Comments: ${o.comments}`
out.appendChild(p)