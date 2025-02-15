function sumLoop(){
    n=0
    for(i=1;i<=10;i++){
        n+=i
    }
    console.log(n)
}
function oddeven(){
    for(i=1;i<=20;i++){
        if(i%2==0){
            console.log("even")
        }
        else{
            console.log("odd")
        }
    }
}
function nisoddeven(){
    for(i=1;i<=20;i++){
        if(i%2==0){
            console.log(i,"is even")
        }
        else{
            console.log(i,"is odd")
        }
    }
}
function even(){
    for(i=1;i<=20;i++){
        if(i%2==0){
            console.log(i)
        }
    }
}
function odd(){
    for(i=1;i<=20;i++){
        if(i%2!=0){
            console.log(i)
        }
    }
}
function factorial(num){
    fact=1
    for(i=1;i<=num;i++){
        fact*=i
    }
    console.log(fact)
}
const arr=[10,15,20,25,30,35,40,45,50,55]
function arrLoop(){
    for(i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}
function arrSum(){
    sum=0
    for(i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(sum)
}
function arrEven(){
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            console.log(arr[i])
        }
    }
}
function arrOdd(){
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            console.log(arr[i])
        }
    }
}
function arrOddEven(){
    od=[]
    ev=[]
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            ev.push(arr[i])
        }
        else{
            od.push(arr[i])
        }
    }
    console.log(ev)
    console.log(od)
}
function negpos(){
    neg=[]
    pos=[]
    z=[]
    arr1=[0,1,-1,2,-2,0,3,-3,4,-4,5,-5,0]
    for(i=0;i<arr1.length;i++){
        if(arr1[i]>0){
            pos.push(arr1[i])
        }
        else if(arr1[i]==0){
            z.push(arr1[i])
        }
        else{
            neg.push(arr1[i])
        }
    }
    console.log(pos)
    console.log(neg)
    console.log(z)
}
function tables(num){
    for(i=1;i<=10;i++){
        console.log(i,"x",num,"=",i*num)
    }
}
tables(5)