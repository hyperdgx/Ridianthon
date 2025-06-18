let closer = document.getElementById("close");
let opa = document.getElementById("open");
let menu = document.getElementById("menu");

function handleClick(){
   menu.style.left = "50%";
   menu.style.width = "100%";
   closer.style.display = "block";
   document.style.overflow = "hidden";
}
function handleClick2(){
   menu.style.left = "-50%";
   menu.style.width = "0%";
   closer.style.display = "none";
}

opa.addEventListener("click", handleClick);
closer.addEventListener("click", handleClick2);



