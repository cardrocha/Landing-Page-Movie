document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('[data-faq-question]');


    for (let i = 0; i <questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function openMenu() {
    if (itens.style.display == 'inline') {
        itens.style.display = 'none'
        screenNav.style.background = "transparent";
        screenNav.style.transition = "background .3s ease";
    } else {
        itens.style.display = 'inline'
        icon.style.marginLeft = "-10px"
        screenNav.style.background = "#fff"
        screenNav.style.transform = "translateX(0%)";
        screenNav.style.transition = "background .3s ease";
        screenNav.style.padding = "20px";
    }
}

function outroMenu() {
    if(window.innerWidth >= 768) {
        itens.style.display = "inline";
        screenNav.style.background = "transparent";
    } else {
        itens.style.display = "none";
    }
}