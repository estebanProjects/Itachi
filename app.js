let imagen_itachi = document.getElementById('imagen_de_itachi')
let view_width = document.getElementById('width')
let view_height = document.getElementById('height')

let width = 185
let height = 302
let indice_de_crecimiento_width = 6.2
let indice_de_crecimiento_height = 10.12

imagen_itachi.addEventListener('click', crecer_imagen)

function crecer_imagen() {
    height = height + indice_de_crecimiento_height
    imagen_itachi.style.height = height + "px"

    width = width + indice_de_crecimiento_width
    imagen_itachi.style.width = width + "px"
}
