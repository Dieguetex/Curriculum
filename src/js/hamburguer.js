export class Hamburger{
    constructor() {
        /* this.hamburger = document.querySelector("#hamburger")
        this.hamburger.addEventListener('click', this.abrirMenu.bind(this))*/

        this.hamburgerDiv = document.querySelector('#icon')
        this.divs= document.querySelector('#divTop')
        this.divHead = document.querySelector('.head')

        this.hamburgerDiv.addEventListener('click', this.abrirMenu.bind(this))
        document.addEventListener('scroll', this.animationHamburguer.bind(this))
    }

    //TODO:
        //el menú se aparece desde la parte izquierda.
        //cuando se hace scroll el botón se re-ubica a la parte inferior izquierda de la pantalla y el menú aparece desde la parte inferior


    abrirMenu() {
        /* this.hamburger.classList.toggle("is-active"); */
        this.divs.classList.toggle('open');
    }

    animationHamburguer(oE){
        let pos = oE.target.scrollingElement.scrollTop
        
        if(pos > 0) {
            this.divHead.classList.add('animate');
        } else {
            this.divHead.classList.remove('animate');
        }
    }
}