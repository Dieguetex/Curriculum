export class Hamburger{
    constructor() {
        this.hamburger = document.querySelector("#hamburger")
        this.hamburger.addEventListener('click', this.abrirMenu.bind(this))
    }
    abrirMenu() {
        this.hamburger.classList.toggle("is-active");
         

        //TODO:
            //el menú se aparece desde la parte izquierda.
            //cuando se hace scroll el botón se re-ubica a la parte inferior izquierda de la pantalla y el menú aparece desde la parte inferior
    }
}