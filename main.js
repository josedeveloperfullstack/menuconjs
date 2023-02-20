const menu = document.querySelector("#menu")
const nav = document.querySelector("nav")
const img = document.querySelector("img")
menu.addEventListener('click', function(){
    const showMenu = nav.hasAttribute('class')
    // si tiene la clase
    if (showMenu) {
      // se la quitamos
      nav.removeAttribute('class')
    } else {
      // se la añadimos
      nav.setAttribute('class', 'show_menu')
    }}
)
const elementosA = document.querySelectorAll("a")
elementosA.forEach(function(elementoA){
    elementoA.addEventListener("click", function(){
        elementosA.forEach(function(elemento){
            const showMenu = elemento.hasAttribute("class")
            if (showMenu && elementoA!== elemento){
                elemento.removeAttribute("class")
            }
        })
        elementoA.classList.toggle("btn_active")
    })
})

img.addEventListener('click', function(){
    const img = inicio.hasAttribute('class')
    // si tiene la clase
    if (showMenu) {
      // se la quitamos
      img.removeAttribute('class')
    } else {
      // se la añadimos
      img.setAttribute('class', 'images')
    }})