function old(age){
    switch (true) {
        case age<16:
            console.log("You can't drive.") 
            break  
        case (age>=16)&&(age<=17):
            console.log("You can drive but not vote.")
            break   
        case (age>=18)&&(age<=24): 
            console.log("You can vote but not rent a car.")
            break
        default:
            console.log("You can do pretty much anything.") 
            break               
    }
}
import { fibonacci } from "../../fibo.js"
fibonacci(8)