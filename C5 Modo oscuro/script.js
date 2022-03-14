let body = document.querySelector('body')
let titulo = document.querySelector('h1')
let items = document.querySelectorAll('div.item')
let textoItems = document.querySelectorAll('.item p')
let tituloItems = document.querySelectorAll('.item h2')

function modoOscuro () {
    body.classList.toggle('dark')
    titulo.classList.toggle('tituloDark')
    items.forEach( items => items.classList.toggle('itemsDark'))
    textoItems.forEach( texto => texto.classList.toggle('Dark'))
    tituloItems.forEach(titulo => titulo.classList.toggle('Dark'))
}
