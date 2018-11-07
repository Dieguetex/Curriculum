export class Main{
    constructor() {
        this.dropDown = document.querySelectorAll('h2');
        this.dropDown.forEach( item => {
                item.addEventListener('click', this.desplegar.bind(this));
            });

        this.nodosArrow = document.querySelectorAll('.arrow');
        this.nodosArrow.forEach( item => {
                item.addEventListener('click', this.desplegar.bind(this));
            });

        this.nodoDiv = document.querySelectorAll('.moveIt');

        document.addEventListener('scroll', this.animarSection.bind(this));
    }

    desplegar(oE) {
        //console.log(oE.target);
        let x = oE.path[0].nodeName;
        switch (x) {
            case 'H2':
                let nodoTexto = oE.target.nextElementSibling;
                var para = document.createElement('P');
                var para2 = document.createElement('P');
                var me = document.createTextNode('Ver menos');
                var ma = document.createTextNode('Ver más');
                para.appendChild(me);
                para2.appendChild(ma);
                

                /* nodoTexto.classList.toggle('hide'); */
                if(nodoTexto.classList.contains('hide')){
                    //console.log('Abrete');
                    //quita hide del div central, el que se esconde
                    nodoTexto.classList.remove('hide');
                    //quita la flecha down
                    nodoTexto.nextElementSibling.firstElementChild.classList.remove('fa-caret-down');
                    //añade la felcha up    
                    nodoTexto.nextElementSibling.firstElementChild.classList.add('fa-caret-up');
                    //quita el párrafo ver más
                    nodoTexto.nextElementSibling.lastElementChild.remove();
                    //añade el párrafo ver menos
                    nodoTexto.nextElementSibling.appendChild(para);

                } else {
                    //console.log('Cierrate');
                    //Añade hide al div central, el que se esconde
                    nodoTexto.classList.add('hide');
                    //quita la flecha up
                    nodoTexto.nextElementSibling.firstElementChild.classList.remove('fa-caret-up');
                    //añade la felcha Down  
                    nodoTexto.nextElementSibling.firstElementChild.classList.add('fa-caret-down');
                    //quita el párrafo ver menos
                    nodoTexto.nextElementSibling.lastElementChild.remove();
                    //añade el párrafo ver más
                    nodoTexto.nextElementSibling.appendChild(para2);

                }

                break;
            case 'I':
                let nodoTexto1 = oE.target.parentNode.previousElementSibling;
                var para = document.createElement('P');
                var para2 = document.createElement('P');
                var me = document.createTextNode('Ver menos');
                var ma = document.createTextNode('Ver más');
                para.appendChild(me);
                para2.appendChild(ma);

                if(nodoTexto1.classList.contains('hide')){
                    //console.log('Abrete');
                    nodoTexto1.classList.remove('hide');

                    oE.target.classList.remove('fa-caret-down');
                    oE.target.classList.add('fa-caret-up');

                    oE.target.nextElementSibling.remove();
                    oE.target.parentNode.appendChild(para);
                } else {
                    //console.log('Cierrate');
                    nodoTexto1.classList.add('hide');
                    
                    oE.target.classList.remove('fa-caret-up');
                    oE.target.classList.add('fa-caret-down');

                    oE.target.nextElementSibling.remove();
                    oE.target.parentNode.appendChild(para2);
                }
                break;
            default:
            console.log('no funca');
                break;
        } 

        
/*      CÓDIGO QUE FUNCIONA SIN ARROWS

        let nodoTexto =oE.target.nextElementSibling;
        nodoTexto.classList.toggle('hide');
        if(!nodoTexto.classList.contains('hide')){
            //console.log('Abrete');
            nodoTexto.classList.remove('hide');
            this.nodosArrow.forEach( item => {
                console.log('arrow')
                item.classList.remove('fa-caret-down');
                item.classList.add('fa-caret-up')
            });
        } else {
            //console.log('Cierrate');
            nodoTexto.classList.add('hide');
            
            this.nodosArrow.forEach( item => {
                item.classList.remove('fa-caret-up')
                item.classList.add('fa-caret-down')
            });
        }  */       
    }

    animarSection(){
        //console.log('aquui estoy!')

        /* let aSection = */this.nodoDiv.forEach(item => {
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
            this.nodoDiv.forEach(item => { 
                item.classList.remove('floatItSelfBack')
                item.classList.add('floatItSelf');
            })
        } else{
            this.nodoDiv.forEach(item => { 
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