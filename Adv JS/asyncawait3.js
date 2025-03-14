async function fetchData() {
    try{
        let response=await fetch("https://jsonplaceholder.typicode.com/posts/1")
        let data = await response.json()
        setTimeout(()=>{console.log(data)},3000)
    } catch(error) {
        console.log("Error:",error)
    }
}
fetchData()