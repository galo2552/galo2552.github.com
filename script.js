window.addEventListener('load', function() {
    const elements = document.querySelectorAll('.ia-s > div');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 200);  // Retrasa la aparición de cada tarjeta
    });
});
