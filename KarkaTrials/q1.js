const arr = [5,10,20,25,50,50]
const output = (arr)=>{
    let b=[]
    b.push(arr[0])
    b.push(arr[1])
    b.push(arr[0]+arr[1])
    for(let i=2;i<arr.length-1;i+=2){
        b.push(arr[i])
        b.push(arr[i+1])
        b.push(arr[i]+arr[i+1])
    }
    console.log(b)
}
output(arr)