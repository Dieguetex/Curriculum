export class Hamburger{
    constructor() {
        /* Hamburguesa vieja editable
        this.hamburger = document.querySelector("#hamburger")
        this.hamburger.addEventListener('click', this.abrirMenu.bind(this))*/

        this.hamburgerDiv = document.querySelector('#icon');
        this.divs= document.querySelector('#divTop');
        this.divHead = document.querySelector('.head');
        this.menuMobile = document.querySelector('#menuMobile')

      
        this.hamburgerDiv.addEventListener('click', this.abrirMenu.bind(this));
        document.addEventListener('scroll', this.animationHamburguer.bind(this));
    }

    //TODO:
        //el menú se aparece desde la parte izquierda.
        //cuando se hace scroll el botón se re-ubica a la parte inferior izquierda de la pantalla y el menú aparece desde la parte inferior


    abrirMenu() {
        /* Hamburguesa vieja editable
        this.hamburger.classList.toggle("is-active"); */
        this.divs.classList.toggle('open');
        this.menuMobile.classList.toggle('active');

    }

    animationHamburguer(oE){
        let pos = oE.target.scrollingElement.scrollTop;
        
        if(pos > 0) {
            this.divHead.classList.add('animate');
            this.menuMobile.classList.remove('active');
            this.divs.classList.remove('open');
        } else {
            this.divHead.classList.remove('animate');
        }
    }
}