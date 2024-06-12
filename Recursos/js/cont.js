function resizeImage() {
    var image = document.getElementById('imagen-dinamica');
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;

    var imageSize = Math.min(windowHeight, windowWidth) * 0.5; // 50% del menor entre el ancho y el alto de la ventana

    image.style.width = imageSize + 'px';
    image.style.height = imageSize + 'px';
    window.addEventListener('load', resizeImage);
    window.addEventListener('resize', resizeImage);
}
