document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const close = document.getElementById('close');

    hamburger.addEventListener('click', function() {


        menu.style.display = 'block';
        hamburger.style.display = 'none';
    });

    close.addEventListener('click', function() {
        menu.style.display = 'none';
        hamburger.style.display = 'block';
    });
});
