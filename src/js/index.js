import { Hamburger } from './hamburguer.js';
import { Main } from './main.js';

class Index {
    constructor() {
        new Hamburger();
        new Main();
        
    }  
}

document.addEventListener('DOMContentLoaded', () => {new Index()});