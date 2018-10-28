class Hamburger{
    constructor() {
        /* Hamburguesa vieja editable
        this.hamburger = document.querySelector("#hamburger")
        this.hamburger.addEventListener('click', this.abrirMenu.bind(this))*/

        this.hamburgerDiv = document.querySelector('#icon');
        this.divs = document.querySelector('#divTop');
        this.divHead = document.querySelector('.head');
        this.menuMobile = document.querySelector('#menuMobile');

      
        this.hamburgerDiv.addEventListener('click', this.abrirMenu.bind(this));
        document.addEventListener('scroll', this.animationHamburguer.bind(this));
    }
    

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

class Main{
    constructor() {
        this.dropDown = document.querySelectorAll('h2');
        /* this.addClassHide = document.querySelectorAll('section>div'); */

        this.dropDown.forEach( item => {
            item.addEventListener('click', this.desplegar.bind(this));
        });
    }

    desplegar(oE) {
        //console.log('click en section!');

        let nodoBtn = oE.target;
        let nodoTexto = nodoBtn.nextElementSibling;

        nodoTexto.classList.toggle('hide');
        if(!nodoTexto.classList.contains('hide')) {
            //console.log('Abrete');
            nodoTexto.classList.remove('hide');
        } else {
            //console.log('Cierrate');
            nodoTexto.classList.add('hide');
        }        
    }
}

class Index {
    constructor() {
        new Hamburger();
        new Main();
        
    }  
}

document.addEventListener('DOMContentLoaded', () => {new Index();});
