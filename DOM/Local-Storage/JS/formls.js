function clickHandle(){
    let fname=document.getElementById("fname")
    let lname=document.getElementById("lname")
    let mail=document.getElementById("mail")
    let pwd=document.getElementById("pwd")
    let cntry=document.getElementById("country")
    let cmd=document.getElementById("comments")
    var obj={}
    let arr=[fname, lname, mail, pwd, cntry, cmd]
    for(i=0;i<arr.length;i++){    
        obj[arr[i].id]=arr[i].value
    }
    obj["gender"]=gender()
    obj["Skills"]=skills()
    localStorage.setItem("Values",JSON.stringify(obj))
    window.location.href = "formout.html"
}
function gender(){
    let gen=document.getElementsByName("gender")
    for(i=0;i<gen.length;i++){
        if(gen[i].checked===true){
            return gen[i].value
        }
    }
}
function skills(){
    let s=document.getElementsByName("skills")
    let ars=[]
    for(i=0;i<s.length;i++){
        if(s[i].checked===true){
            ars.push(s[i].value)
        }
    }
    return ars
}