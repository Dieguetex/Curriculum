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
        this.nodoSection1 = document.querySelector('#moveIt1');
        this.nodoSection2 = document.querySelector('#moveIt2');
        this.nodoSection3 = document.querySelector('#moveIt3');

        this.dropDown.forEach( item => {
            item.addEventListener('click', this.desplegar.bind(this));
        });
        document.addEventListener('scroll', this.isScrolledIntoView.bind(this));
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
    isScrolledIntoView(element) {
        console.log('entra!');
        let rect = this.nodoSection1.getBoundingClientRect();
        let elemTop = rect.top;
        let elemBottom = rect.bottom;
    
        // Only completely visible elements return true:
        let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        // Partially visible elements return true:
        //isVisible = elemTop < window.innerHeight && elemBottom >= 0;

/*         if (isVisible) {
            console.log('se ve el elemento entero!');
            element.classList.remove('floatItSelfBack');
            element.classList.add('floatItSelf');
        } else{
            element.classList.remove('floatItSelf');
            element.classList.add('floatItSelfBack');
        } */
        
        if(isVisible){
            console.log('se ve el elemento entero!');
            this.nodoSection1.classList.remove('floatItSelfBack');
            this.nodoSection1.classList.add('floatItSelf');
        } else{
            this.nodoSection1.classList.remove('floatItSelf');
            this.nodoSection1.classList.add('floatItSelfBack');
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
