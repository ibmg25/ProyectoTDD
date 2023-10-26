import Catalogo from "./catalogo.js";
import Kata from "./kata.js";

const Titulo = document.querySelector("#Titulo");
const form = document.querySelector("#buscar-form");    
const div = document.querySelector("#resultado-div");
const titulo=null;
const catalogo = new Catalogo();
const kata1 = new Kata();
const kata2 = new Kata("Kata2", "sin categoria", "Dificil", "nueva descripcion");
catalogo.insertarKata(kata1);
catalogo.insertarKata(kata2);
div.innerHTML = catalogo.printLista();







