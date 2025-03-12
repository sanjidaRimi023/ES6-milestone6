const loadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => showUser(data))
}

const showUser = (users) => {
    const userContainer = document.getElementById("users");
    
    for (const user of users) {
        console.log(user.name);
        const li = document.createElement("li");
        li.innerText = user.name;
        userContainer.appendChild(li);
    }
}

const userEmail = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => showCity(data))
    
}
const showCity = (cites)=> {
    const cityContainer = document.getElementById("cites");
    for (const city of cites) {
        const li = document.createElement("li");
        li.innerText = city.city;
        cityContainer.appendChild(li);
        
    }
    
}