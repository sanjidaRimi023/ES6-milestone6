// promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        const status = true;
        if (status) {
            const mockData = {
                json:()=>Promise.resolve({name:'rimiii'})
            }
            resolve(mockData);
        } else {
            reject("the status is wrong")
        }
    })
    
}
// fetchData()
//     .then(res => res.json())
//     .then(data=>console.log(data))
// .catch(err=>console.log(err))


// promise All

const urls = [
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/albums",
    "https://jsonplaceholder.typicode.com/photos"
];
Promise.all(urls.map(url => {
    return fetch(url).then(res => res.json())
    .then(data=>(data))
}))
    .then(res => res)
    .then(data => console.log(data))
    .catch(err=>console.log(err))