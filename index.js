function mostrarInfo(card) {
    card.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
}

function ocultarInfo(card) {
    card.querySelector('.card-inner').style.transform = '';
}

function toggleMenu() {
    var nav = document.getElementById('nav');
    var overlay = document.getElementById('overlay');
    var closeBtn = document.getElementById('close-btn');
    nav.classList.toggle('mostrar');
    overlay.classList.toggle('mostrar');
    closeBtn.classList.toggle('mostrar');
}