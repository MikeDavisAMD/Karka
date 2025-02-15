fetch("https://jsonplaceholder.typicode.com/posts").then(out => out.json()).then(output => {
    for(i=0;i<output.length;i++){
        console.log(output[i].userId)
    }
})