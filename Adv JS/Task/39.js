async function fetchTodo(url) {
    try{
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
fetchTodo('https://jsonplaceholder.typicode.com/todos/1')