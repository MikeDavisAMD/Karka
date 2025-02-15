fetch("https://jsonplaceholder.typicode.com/posts").then(output => output.json()).then(out => {
    for(i=0;i<out.length;i++){
        let bd=document.getElementById("tbd")
        let row=document.createElement("tr")
        arr=[i+1,`${out[i].id}`,`${out[i].userId}`,`${out[i].title}`,`${out[i].body}`]
        for(j=0;j<arr.length;j++){
            let dt=document.createElement("td")
            dt.innerHTML=arr[j]
            row.appendChild(dt)
        }
        bd.appendChild(row)
    }
})