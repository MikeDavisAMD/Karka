function scores(T,E,M,S,SS){
    total=T+E+M+S+SS
    console.log(total,"is the total");
    perc=(total/500)*100
    console.log(perc+"%")
    grades(perc)
}
function grades(percent){
    if((percent>80)&&(percent<=100)){
        console.log("First Grade")        
    }
    else if((percent>50)&&(percent<=80)){
        console.log("Second Grade")
    }
    else{
        console.log("FAIL!!!")
    }
}
function bmiCalc(w,h){
    bmi=w/(h/100)**2
    if(bmi<18.5){
        console.log("Under-weight")
    }
    else if((bmi>=18.5)&&(bmi<=24.9)){
        console.log("Normal-Weight")        
    }
    else if((bmi>=25)&&(bmi<=29.9)){
        console.log("Over-Weight")        
    }
    else{
        console.log("Obesity")
    }
}
function larof3(a,b,c){
    if((a>b)&&(a>c)){
        console.log("A is greater") 
    }
    else if((b>a)&&(b>c)){
        console.log("B is Greater")        
    }
    else{
        console.log("C is Greater")        
    }
}
function pyth(a,b,c){
    if((c**2)==((a**2)+(b**2))){
        console.log("Forms a Triangle")        
    }
    else{
        console.log("Doesn't form a triangle")        
    }
}
larof3(10,30,20)
larof3(10,20,30)
larof3(30,20,10)
pyth(6,8,10)
pyth(6,8,9)
