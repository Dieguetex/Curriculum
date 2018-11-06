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
        this.nodosArrow = document.querySelectorAll('.arrow');
        this.nodoSection = document.querySelectorAll('.moveIt');

        this.dropDown.forEach( item => {
            item.addEventListener('click', this.desplegar.bind(this));
        });
        this.nodosArrow.forEach( item => {
            item.addEventListener('click', this.desplegar.bind(this));
        });

        
        document.addEventListener('scroll', this.animarSection.bind(this));
    }

    desplegar(oE) {
        //console.log('click en section!');
 
        let nodoTexto = oE.target.nextElementSibling;

        //funciona mientras se haga click en h2... si se hace click en arrow el nodotexto se ejecuta y no funciona! 
        
        //deberé hacer un nodo específico para el section... y generalizar la función.

        nodoTexto.classList.toggle('hide');
        
        if(!nodoTexto.classList.contains('hide')){
            //console.log('Abrete');
            nodoTexto.classList.remove('hide');
            this.nodosArrow.forEach( item => {
                console.log('arrow');
                item.classList.remove('fa-caret-down');
                item.classList.add('fa-caret-up');
            });



/*             this.nodosArrow.classList.remove('fa-caret-down');
            this.nodosArrow.classList.add('fa-caret-up') */

        } else {
            //console.log('Cierrate');
            nodoTexto.classList.add('hide');
            
            this.nodosArrow.forEach( item => {
                item.classList.remove('fa-caret-up');
                item.classList.add('fa-caret-down');
            });


/*             this.nodosArrow.classList.add('fa-caret-down');
            this.nodosArrow.classList.remove('fa-caret-up') */


        }        
    }

    animarSection(){
        //console.log('aquui estoy!')

        /* let aSection = */this.nodoSection.forEach(item => {
            if (this.isScrolledIntoView(item)){
                item.classList.remove('floatItSelfBack');
                item.classList.add('floatItSelf');
            } else{
                item.classList.remove('floatItSelf');
                item.classList.add('floatItSelfBack');
            }
            
        });
        
/*         if (aSection){
            console.log('se ve el elemento entero!');
            this.nodoSection.forEach(item => { 
                item.classList.remove('floatItSelfBack')
                item.classList.add('floatItSelf');
            })
        } else{
            this.nodoSection.forEach(item => { 
                item.classList.remove('floatItSelf')
                item.classList.add('floatItSelfBack')
            })
        } */

    }

    isScrolledIntoView(oEv) {
        //console.log(oEv)
        let rect = oEv.getBoundingClientRect();
        let elemTop = rect.top;
        let elemBottom = rect.bottom;
    
        // Only completely visible elements return true:
        let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        // Partially visible elements return true:
        //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        
        return isVisible;
    }
}

class Index {
    constructor() {
        new Hamburger();
        new Main();
        
    }  
}

document.addEventListener('DOMContentLoaded', () => {new Index();});
