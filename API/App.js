const URL = "https://jsonplaceholder.typicode.com/posts";
const btn = document.querySelector("#btn");

// let promise = fetch(URL);
// console.log(promise);



const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
}
btn.addEventListener("click",getFacts);
// getFacts();
