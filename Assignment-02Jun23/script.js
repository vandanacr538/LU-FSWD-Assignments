window.onload=function(){
    const url="https://jsonplaceholder.typicode.com/users";
    let userlist=document.getElementsByClassName("name");
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        for(let i=0;i<userlist.length;i++){
            userlist[i].innerHTML=data[i].name;
        }
    });
}