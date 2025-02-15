export function fibonacci(num){
    var a=[]
    for(let i=0;i<num;i++){
        if((a[i]==a[0])||(a[i]==a[1])){
            a.push(1)
        }else{
            a.push(a[i-1]+a[i-2])
        }
    }console.log(a)
}
