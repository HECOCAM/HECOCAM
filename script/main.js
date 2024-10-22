// Desplazamiento suave para navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evitar el comportamiento predeterminado
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Deshabilitar clic derecho
document.addEventListener('contextmenu', event => event.preventDefault());

// Bloquear atajos de teclado para capturas (ejemplo en Chrome/Windows)
document.addEventListener('keydown', event => {
    if (
        (event.ctrlKey && event.key === 'p') || // Ctrl + P (Imprimir)
        (event.ctrlKey && event.key === 's') || // Ctrl + S (Guardar)
        (event.key === 'F12') || // F12 (Herramientas de desarrollador)
        (event.ctrlKey && event.shiftKey && event.key === 'I') // Ctrl + Shift + I (Inspeccionar)
    ) {
        event.preventDefault();
        alert('Acción bloqueada por motivos de seguridad.');
    }
});

// Detectar intento de captura de pantalla (experimental)
let isVisible = true;

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        isVisible = false;
        alert('Intento de captura detectado. Acción bloqueada.');
    } else {
        isVisible = true;
    }
});

// Evitar arrastrar imágenes para evitar descargas
document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
});
