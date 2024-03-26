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


     $html.style.setProperty("--dark-color","pink");
     varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color");
     $body.style.setProperty("backgroundcolor",varDarkColor);

     console.clear();
     
     const $whatsDom=document.getElementById("que-es");

      let txt=`
      <p>
      prueba 1
      </p>
      <p>
      prueba 2
      </p>
      <p>
      prueba 3
      </p>
      `;
$whatsDom.innerText=txt; // no apta para su uso no 

$whatsDom.textContent=txt; // solo codigo txt no se renderiza html etiquetas 
$whatsDom.innerHTML=txt; // se renderiza como si fuera html etiquetas 
$whatsDom.outerHTML=txt; // crea los nuemos elementos de forma independiente y renderiza el html

console.clear()

const $recorriendoDom=document.querySelector(".parrafo");   
  /*  RECORRIENDO EL DOM LOS ELEMENTOS 
   children   parentElement  
   primer-elemento-herencia firtsElementChild  
    ultimo-elemento-herencia lastElementChild
 */


console.clear()

 // creando elementos dinamicamente

/*  Métodos y significados del DOM:
appendChild:

Significado: Agregar un nodo hijo al final de un nodo padre.
Ejemplo: padre.appendChild(hijo)
insertBefore:

Significado: Inserta un nodo hijo antes de otro nodo hijo especificado.
Ejemplo: padre.insertBefore(nuevoHijo, hijoExistente)
replaceChild:

Significado: Reemplaza un nodo hijo por otro.
Ejemplo: padre.replaceChild(nuevoHijo, hijoViejo)
removeChild:

Significado: Elimina un nodo hijo del árbol DOM.
Ejemplo: padre.removeChild(hijo)
cloneNode:

Significado: Crea un clon de un nodo.
Ejemplo: const clon = nodo.cloneNode(true)
createElement:

Significado: Crea un nuevo elemento DOM.
Ejemplo: const elemento = document.createElement("div")
createTextNode:

Significado: Crea un nuevo nodo de texto.
Ejemplo: const texto = document.createTextNode("Hola mundo")
setAttribute:

Significado: Establece un atributo para un elemento.
Ejemplo: elemento.setAttribute("id", "miElemento")
getAttribute:

Significado: Obtiene el valor de un atributo para un elemento.
Ejemplo: const valor = elemento.getAttribute("id")
getElementsByTagName:

Significado: Obtiene una lista de elementos por su nombre de etiqueta.
Ejemplo: const elementos = document.getElementsByTagName("div")
getElementById:

Significado: Obtiene un elemento por su ID.
Ejemplo: const elemento = document.getElementById("miElemento")
 */

/* appenchild

Métodos y significados del DOM:
appendChild:

Significado: Agregar un nodo hijo al final de un nodo padre.
Ejemplo: padre.appendChild(hijo)
insertBefore:

Significado: Inserta un nodo hijo antes de otro nodo hijo especificado.
Ejemplo: padre.insertBefore(nuevoHijo, hijoExistente)
replaceChild:

Significado: Reemplaza un nodo hijo por otro.
Ejemplo: padre.replaceChild(nuevoHijo, hijoViejo)
removeChild:

Significado: Elimina un nodo hijo del árbol DOM.
Ejemplo: padre.removeChild(hijo)
cloneNode:

Significado: Crea un clon de un nodo.
Ejemplo: const clon = nodo.cloneNode(true)
createElement:

Significado: Crea un nuevo elemento DOM.
Ejemplo: const elemento = document.createElement("div")
createTextNode:

Significado: Crea un nuevo nodo de texto.
Ejemplo: const texto = document.createTextNode("Hola mundo")
setAttribute:

Significado: Establece un atributo para un elemento.
Ejemplo: elemento.setAttribute("id", "miElemento")
getAttribute:

Significado: Obtiene el valor de un atributo para un elemento.
Ejemplo: const valor = elemento.getAttribute("id")
getElementsByTagName:

Significado: Obtiene una lista de elementos por su nombre de etiqueta.
Ejemplo: const elementos = document.getElementsByTagName("div")
getElementById:

Significado: Obtiene un elemento por su ID.
Ejemplo: const elemento = document.getElementById("miElemento")
parentElement:

Significado: Obtiene el elemento padre de un nodo especificado.
Ejemplo: const padre = hijo.parentElement
textContent:

Significado: Obtiene o establece el contenido de texto de un nodo.
Ejemplo: const texto = elemento.textContent; elemento.textContent = "Nuevo texto"
innerHTML:

Significado: Obtiene o establece el HTML interno de un elemento.
Ejemplo: const html = elemento.innerHTML; elemento.innerHTML = "<h1>Título</h1>"
outerHTML:

Significado: Obtiene o establece el HTML completo de un elemento.
Ejemplo: const html = elemento.outerHTML; elemento.outerHTML = "<div>Nuevo elemento</div>"
style:

Significado: Obtiene o establece el estilo CSS de un elemento.
Ejemplo: const estilo = elemento.style; elemento.style.color = "red"
classList:

Significado: Obtiene una lista de las clases CSS de un elemento.
Ejemplo: const clases = elemento.classList; elemento.classList.add("claseNueva")
addEventListener:

Significado: Agrega un escuchador de eventos a un elemento.
Ejemplo: elemento.addEventListener("click", function() { ... })
removeEventListener:

Significado: Elimina un escuchador de eventos de un elemento.
Ejemplo: elemento.removeEventListener("click", function() { ... })
querySelector:

Significado: Obtiene el primer elemento que coincide con un selector de CSS.
Ejemplo: const elemento = document.querySelector("#miElemento")
querySelectorAll:

Significado: Obtiene una lista de todos los elementos que coinciden con un selector de CSS.
Ejemplo: const elementos = document.querySelectorAll(".clase")

*/
 const $figure=document.createElement("figure"),
      $img=document.createElement("img"),
      $figcaption=document.createElement("figcaption"),
      $figcaptionText=document.createElement("Animals"),
      $cards=document.querySelector(".cards"),
      $figure2=document.createElement("figure")
      

      $img.setAttribute("src","./mapache.jpg")
      $img.setAttribute("alt","imagenes")
      $figure.classList.add("card")

      $figcaption.appendChild($figcaptionText)
      $figure.appendChild($img)
      $figure.appendChild($figcaption)
      $cards.appendChild($figure)

      $figure2.innerHTML=`
      <img src="./personas.avif" alt="people">
      <figcaption>Personas</figcaption>
      `;
      $figure2.classList.add("card")
      $cards.appendChild($figure2)

      const estaciones=["primavera","verano","otoño","invierno"]
      $ul=document.createElement("ul")

      document.write("<h3>Estaciones del Año</3>")
      document.body.appendChild($ul)

      estaciones.forEach(el => {
         const $li=document.createElement("li")
         $li.textContent=el
         $ul.appendChild($li)
      })




      const continentes=["africa","america","asia","europa","oceania"],
       $ul2=document.createElement("ul");

       document.write("Componentes Dinamicos")
       document.body.appendChild($ul2)
       $ul2.innerHTML=""
       continentes.forEach(el => {
          $ul2.innerHTML += `<li>${el}</li>`
       })



       const meses=[
         "enero",
         "febrero",
         "marzo",
         "abril",
         "mayo",
         "junio",
         "julio",
         "agosto",
         "septiembre",
         "octubre",
         "noviembre",
         "diciembre"

       ],
       $ul3=document.createElement("ul"),
       $fragment=document.createDocumentFragment();

       meses.forEach(el=>{
         const $li=document.createElement("li")
         $li.textContent=el
         $fragment.appendChild($li)
       });

       document.write("<h3>Meses del AÑo</h3>")
       $ul3.appendChild($fragment)
       document.body.appendChild($ul3)

       console.clear();

      /*  const $cardsTemplate=document.querySelector(".cards"),
            $template=document.getElementById("template-card").content,
            $fragment2=document.createDocumentFragment();

            cardContent=[
               {
                  title:"Primavera",
                  image:"./primavera.jpg"
               },
               {
                  title:"Oso",
                  image:"./oso.jpg"
               },
               {
                  title:"Verano",
                  image:"./verano.jpg"
               },
               {
                  title:"Mapache",
                  image:"./mapacheVecinos.jpg"
               },
               {
                  title:"Ardilla",
                  image:"./ardilla.jpg"
               }
            ]

            cardContent.forEach(el=>{
               $template.querySelector("img").setAttribute("src",el.img)
               $template.querySelector("img").setAttribute("alt",el.title)
               $template.querySelector("figcaption").textContent=el.title

               let $clone=document.importNode($template,true)
               $fragment.appendChild($clone)
            })

            $cardsTemplate.appendChild($fragment)

            console.clear() */


            //reemplaza partes del nodo 

        /*  const $cards3=document.querySelector(".cards"),
               $newCard=document.createElement("figure");

               $newCard.innerHTML=`
               <img src="./primavera.jpg" alt="Primavera">
               <figcaption>Primavera</figcaption>`

               $newCard.classList.add("card")
               $cards3.replaceChild($newCard, $cards.children[2]); */

               