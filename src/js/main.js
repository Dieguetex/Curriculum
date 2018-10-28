export class Main{
    constructor() {
        this.dropDown = document.querySelectorAll('h2');
        /* this.addClassHide = document.querySelectorAll('section>div'); */

        this.dropDown.forEach( item => {
            item.addEventListener('click', this.desplegar.bind(this));
        });
    }

    desplegar(oE) {
        console.log('click en section!');

        let nodoBtn = oE.target;
        let nodoTexto = nodoBtn.nextElementSibling;

        nodoTexto.classList.toggle('hide');
        if(!nodoTexto.classList.contains('hide')) {
            console.log('Abrete');
            nodoTexto.classList.remove('hide');
        } else {
            console.log('Cierrate');
            nodoTexto.classList.add('hide');
        }        
    }
}