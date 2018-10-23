import { Hamburger } from './hamburguer.js';

class Index {
    constructor() {
        new Hamburger();
    }  
}

document.addEventListener('DOMContentLoaded', () => {new Index()});