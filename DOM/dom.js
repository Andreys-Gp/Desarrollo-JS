const $linkDom =document.querySelector(".styles-ancla");

console.log($linkDom.style)
console.log($linkDom.getAttribute("style"))
console.log($linkDom.style.backgroundColor)
console.log(window.getComputedStyle($linkDom))
console.log(getComputedStyle($linkDom).getPropertyValue("color"))

$linkDom.style.setProperty("text-decoration","none")
$linkDom.style.setProperty("background-color","white")


/* variavles CSS */

const $html=document.documentElement;
const $body= document.body;

 let varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color");
  let   varYellowkColor=getComputedStyle($html).getPropertyValue("--yellow-color");
     
     console.log(varDarkColor,varYellowkColor);
    
     $body.style.backgroundColor=varDarkColor;
     $body.style.color=varYellowkColor;


     $html.setProperty("--dark-color","pink");
     varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color");
     $body.style.setProperty("backgroundcolor",varDarkColor);