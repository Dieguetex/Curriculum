export class Main{
    constructor() {
        this.dropDown = document.querySelectorAll('h2');
        this.nodoSection = document.querySelectorAll('.moveIt');

        this.dropDown.forEach( item => {
            item.addEventListener('click', this.desplegar.bind(this));
        });

        
        document.addEventListener('scroll', this.animarSection.bind(this))
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

    animarSection(){
        //console.log('aquui estoy!')

        /* let aSection = */this.nodoSection.forEach(item => {
            if (this.isScrolledIntoView(item)){
                item.classList.remove('floatItSelfBack')
                item.classList.add('floatItSelf');
            } else{
                item.classList.remove('floatItSelf')
                item.classList.add('floatItSelfBack')
            }
            
        })
        
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