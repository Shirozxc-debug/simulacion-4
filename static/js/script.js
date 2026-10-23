// ==========================================
// 1. CARRUSEL DE IMÁGENES
// ==========================================

// Array con las rutas de las imágenes
const imagenes = [
    "static/images/soporte-tecnico.png",
    "static/images/Redes-y-conectividad.png",
    "static/images/Desarrollo-web.png",
    "static/images/Seguridad-informatica.png"
];

// Variable para saber en qué imagen estamos
let indiceActual = 0;

// Función que mueve el carrusel
function cambiarImagen(direccion) {
    indiceActual = indiceActual + direccion;

    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    } else if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    }

    const imgElement = document.getElementById("imagen-carrusel");
    if (imgElement) {
        imgElement.src = imagenes[indiceActual];
    }
}

// ==========================================
// 2. CONTADOR DE ME GUSTA EN PROYECTOS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.btn-like');

    likeButtons.forEach(btn => {
        let liked = false;
        btn.addEventListener('click', () => {
            const countSpan = btn.querySelector('.like-count');
            let currentLikes = parseInt(countSpan.textContent);

            if (!liked) {
                countSpan.textContent = currentLikes + 1;
                btn.classList.add('liked');
                liked = true;
            } else {
                countSpan.textContent = currentLikes - 1;
                btn.classList.remove('liked');
                liked = false;
            }
        });
    });
});