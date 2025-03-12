const takePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
        .then(data => {
        displayPost(data)
    })
}
const displayPost = (posts) => {
    
    const postContainer = document.getElementById("postContainer");

    for (const post of posts) {
        console.log(post);
        const div = document.createElement("div");
        div.innerHTML = `
        <h1>Post title is:</h1>
        <p>${post.title}</p>
        <h2>post body</h2>
        <p>${post.body}</P>
        `;
        postContainer.appendChild(div);
    }
}