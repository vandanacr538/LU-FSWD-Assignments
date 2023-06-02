let modal=document.getElementById("mdl");
let openbtn=document.getElementById("open-btn");
let closebtn=document.getElementById("close-btn");
let outsidemodal=document.getElementById("outside-modal");

console.log(modal);
openbtn.onclick=function(){
    modal.style.display="block";
    outsidemodal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}
closebtn.onclick=function(){
    modal.style.display="none";
    outsidemodal.style.backgroundColor= "rgb(233, 228, 228)";
}
window.onclick=function(event){
    if(event.target==outsidemodal){
        console.log(event);
        modal.style.display="none";
        outsidemodal.style.backgroundColor= "rgb(233, 228, 228)";
    }
}