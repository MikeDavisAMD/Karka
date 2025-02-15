// 1. convert hours into minutes
export function h2m(h){
    console.log(h,"Hours","->",h*60,"Minutes")
}
// 2. calculate speed 
function speed(D,T,d,t){
    console.log("Distance(km) is",D,"km\nTime(hr) is",T,"hr\nSpeed is",D/T,"kmph")
    console.log("Distance(m) is",d,"m\nTime(s) is",t,"s\nSpeed is",d/t,"m/s")
}
h2m(24)
speed(24,.3,500,120)
import { calculator } from "../Practice/prac1.js"
calculator(2,4)