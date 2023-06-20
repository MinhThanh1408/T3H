const fetchData = () => {
    const promise = new Promise((resolve, reject) =>{
        resolve(fetch('https://jsonplaceholder.typicode.com/todos/1'))
    }
    promise.then(res => res.json())
}