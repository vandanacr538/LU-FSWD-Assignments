async function displayBtn1Data(){
    const url="https://jsonplaceholder.typicode.com/users";
    const response=await fetch(url);
    const data=await response.json();
    console.log("Users data from the Button 1 API will be displayed below:")
    console.log(data);
}
async function displayBtn2Data(){
    const url="https://jsonplaceholder.typicode.com/albums";
    const response=await fetch(url);
    const data=await response.json();
    console.log("Albums data will be displayed below, from the Button 2 API:")
    console.log(data);
}
async function displayBtn3Data(){
    const url="https://jsonplaceholder.typicode.com/posts";
    const response=await fetch(url);
    const data=await response.json();
    console.log("Posts data will be displayed below, from the Button 3 API:")
}
async function displayBtn4Data(){
    const url="https://jsonplaceholder.typicode.com/todos";
    const response=await fetch(url);
    const data=await response.json();
    console.log("Todo's data will be displayed below, from the Button 4 API:");
    console.log(data);
}
async function displayBtn5Data(){
    const url="https://jsonplaceholder.typicode.com/comments";
    const response=await fetch(url);
    const data=await response.json();
    console.log("Comments data will be displayed below, from the Button 5 API:");
    console.log(data);
}