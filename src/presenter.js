import Catalogo from "./catalogo.js";
import Kata from "./kata.js";

 const Titulo = document.querySelector("#Titulo");
 const form = document.querySelector("#buscar-form");
 const div = document.querySelector("#resultado-div");

const catalogo = new Catalogo();
const kata1 = new Kata();
const kata2 = new Kata("Kata 2", "sin categoria", "media", "nueva descripcion");
const kata3 = new Kata("Kata 3", "sin categoria", "facil", "nueva descripcion");
const kata4 = new Kata("Kata 4", "sin categoria", "dificil", "nueva descripcion");
const kata5 = new Kata("Kata 5", "sin categoria", "media", "nueva descripcion");
catalogo.insertarKata(kata1);
catalogo.insertarKata(kata2);
catalogo.insertarKata(kata3);
catalogo.insertarKata(kata4);
catalogo.insertarKata(kata5);
div.innerHTML = catalogo.printLista();

 form.addEventListener("submit", (event) => {
   event.preventDefault();

   const titulo =Titulo.value;
   const catalogo2 = new Catalogo();
   const kataBuscada=catalogo.buscarPorTitulo(titulo);
   catalogo2.insertarKata(kataBuscada);
   div.innerHTML = catalogo2.printLista();
 });




