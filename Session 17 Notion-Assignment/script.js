window.addEventListener("resize", ()=>{location.reload()});
let mainMenu=document.getElementById("main-menu");
let mainMenuMobile=document.getElementById("m-main-menu");
let menu=document.getElementById("menu");
let toggleMenu=true;
let toggleMainMenu=true;
let x=window.matchMedia("(max-width: 480px)");
let submenus=document.getElementsByClassName("sub-menu");
let subMenuItems=document.getElementsByClassName("sub-menu-items");
let arrows=document.getElementsByClassName("arrow-right");
let toggleArr=[false, false, false];

function displayMenus(){
    if(!x.matches){
        menu.style.display="block";
        mainMenu.style.backgroundColor="#466488";
        document.getElementById("arrow-down").src="images/arrow up.png";
    }
}
function hideMenus(){
    if(!x.matches){
        menu.style.display="none"; 
        mainMenu.style.backgroundColor="";
        mainMenu.style.backgroundColor="#39506d";
        document.getElementById("arrow-down").src="images/arrow down.png";
    }
}
function displayMobilemenu(){
    mainMenu.style.display=toggleMenu?"block":"none";
    document.getElementById("menu-icon").src=toggleMenu?"images/crossicon.png":"images/menuicon.png";
    toggleMenu=!toggleMenu;
}
mainMenuMobile.onclick= function(e){
    if(x.matches){
        if(menu && !menu.contains(e.target)){
            menu.style.display=toggleMainMenu?"block":"none";
            mainMenu.style.backgroundColor=toggleMainMenu?"#466488":"#39506d";
            mainMenuMobile.style.backgroundColor=toggleMainMenu?"#466488":"#39506d";
            document.getElementById("arrow-down").src=toggleMainMenu?"images/arrow up.png":"images/arrow down.png";
            toggleMainMenu=!toggleMainMenu;
        }
    }
}

function displaySubMenusMobile(e,i) {
  if(submenus[i].contains(e.target)){
    for(let j = 0; j<toggleArr.length;j++)
    {
      if(i===j){
        toggleArr[i]=!toggleArr[i];
      }
      else {
        toggleArr[j]=false;
      }
    }
    for(let j = 0; j<toggleArr.length;j++)
    {
      subMenuItems[j].style.display = toggleArr[j] ? "block" : "none";
      arrows[j].src = toggleArr[j] ?"images/arrow left.png":"images/arrow right.png" ;
      submenus[j].style.backgroundColor = toggleArr[j] ? "#6782a5" : "#5a769b";
    }
  }
}

function displaySubMenus(i){
    subMenuItems[i].style.display="block";
    submenus[i].style.backgroundColor="#6782a5";
    arrows[i].src="images/arrow left.png";
}
function hideSubMenus(i){
    subMenuItems[i].style.display="none";
    submenus[i].style.backgroundColor="#5a769b";
    arrows[i].src="images/arrow right.png";
}

if(x.matches){
    for(let i=0;i<submenus.length;i++){
        submenus[i].addEventListener("click", (e)=>displaySubMenusMobile(e,i));
        submenus[i].removeEventListener("click", (e)=>displaySubMenusMobile(e,i));
    }
}
else if(!x.matches){
    for(let i=0;i<submenus.length;i++){
        submenus[i].addEventListener("mouseover", ()=>displaySubMenus(i))
        submenus[i].addEventListener("mouseout",()=>hideSubMenus(i))
    }
}



