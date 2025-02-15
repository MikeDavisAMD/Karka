function oddeven(number){
    if(number%2==0){
        console.log("The number is EVEN")
    }else{
        console.log("The number is ODD")
    }
}
function posneg(number){
    if(number>0)
        console.log("The number is POSITIVE")
    else
        console.log("The number is NEGATIVE")
}
function vote(number){
    if(number>=18){
        console.log("You can Vote")
    }
    else{
        console.log("You cannot vote da chinna payale")
    }
}
function div510(number){
    if((number%10==0)&&(number%5==0))
        console.log("The number is divisible by both 10 & 5")
    else{
        console.log("The number is not divisible by both 10 & 5")
    }
}
function mobile(number){
    num=number.toString()
    if(num.length==10){
        console.log("Valid Mobile Number")
    }
    else{
        console.log("ERROR: Enter a valid Mobile number")
    }
}
function marks(number){
    if((number<=500)&&(number>400)){
        console.log("Grade 0")
    }
    else if((number<=400)&&(number>300)){
        console.log("Grade A")
    }
    else if((number<=300)&&(number>=200)){
        console.log("Grade B")
    }
    else{
        console.log("FAIL")
    }
}
function day(input){
    if(input==1){
        console.log("Sunday")
    }
    else if(input==2){
        console.log("Monday")
    }
    else if(input==3){
        console.log("Tuesday")
    }
    else if(input==4){
        console.log("Wednesday")
    }
    else if(input==5){
        console.log("Thursday")
    }
    else if(input==6){
        console.log("Friday")
    }
    else if(input==7){
        console.log("Saturday")
    }
    else{
        console.log("Invalid")
    }
}
function signalIs(signal){
    if(signal=="Red"){
        console.log("STOP")
    }
    else if(signal=="Yellow"){
        console.log("READY")
    }
    else if(signal=="Green"){
        console.log("GO")
    }
    else{
        console.warn("ERROR: Only 'Red','Green' & 'Yellow' are allowed")
    }
}
function discount(price){
    if(price>=1000){
        let dis=(price*10)/100
        console.log("Congratulations🥳 you are eligible for Discount")
        console.log("Price after discount is",price-dis)
    }
    else{
        console.log("Sorry😔 you are only eligible for discount if your bill is above ₹1000")
        console.log("Still you need to buy for ₹"+(1000-price))
    }
}
discount(5700)
discount(50)