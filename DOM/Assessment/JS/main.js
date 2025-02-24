let click=true
function clickHandle(){
    if(click){
        document.getElementById("toggle").innerHTML=`<i class="fa-solid fa-toggle-on fa-3x"></i>`
        document.body.style.backgroundColor="red"
        click=false                
    } else {
        document.getElementById("toggle").innerHTML=`<i class="fa-solid fa-toggle-off fa-3x"></i>`
        document.body.style.backgroundColor=""
        click=true
    }
}