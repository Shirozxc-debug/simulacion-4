// 1. Array con las rutas de las imágenes (pueden ser rutas locales como "img/foto1.jpg")
const imagenes = [
    "static/images/soporte-tecnico.png",
    "static/images/Redes-y-conectividad.png",
    "static/images/Desarrollo-web.png", 
    "static/images/Seguridad-informatica.png"
];

// 2. Variable para saber en qué imagen estamos (empezamos en la primera)
let indiceActual = 0;

// 3. La función que mueve el carrusel
function cambiarImagen(direccion) {
    // Sumamos o restamos dependiendo del botón que se hizo clic
    indiceActual = indiceActual + direccion;

    // Si nos pasamos de la última imagen, volvemos al principio (0)
    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }
    // Si retrocedemos antes de la primera imagen, vamos a la última
    else if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    }

    // Capturamos la etiqueta <img id="imagen-carrusel"> y le cambiamos su atributo 'src'
    document.getElementById("imagen-carrusel").src = imagenes[indiceActual];
}
