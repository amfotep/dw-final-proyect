import DOM from "./dom.mjs";

let selector = true

DOM.btn_menu.addEventListener('click', function() {
    
    DOM.navbar_container.classList.toggle('expand__navbar__container')
    DOM.navbar.classList.toggle('toggle__navbar')

    if (selector) {
        DOM.bars.classList.replace('fa-bars', 'fa-x')
        DOM.bars.style.fontSize = '1.5em'
    } 
    else {
        DOM.bars.classList.replace('fa-x', 'fa-bars')
        DOM.bars.style.fontSize = '2em'
    }

    selector = !selector;
});

DOM.logo.addEventListener('click', ()=>{
    window.location.href = "/index.html";
})