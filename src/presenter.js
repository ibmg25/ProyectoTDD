import Catalogo from "./catalogo.js";
import Kata from "./kata.js";

 const Titulo = document.querySelector("#Titulo");
 const form = document.querySelector("#buscar-form");
 const div = document.querySelector("#resultado-div");

const catalogo = new Catalogo();
const kata1 = new Kata();
const kata2 = new Kata("Kata nueva", "sin categoria", "media", "nueva descripcion");
catalogo.insertarKata(kata1);
catalogo.insertarKata(kata2);
div.innerHTML = catalogo.printLista();

 form.addEventListener("submit", (event) => {
   event.preventDefault();

   const titulo = toString(Titulo.value);
   const catalogo2 = new Catalogo();
   const kataBuscada = new Kata();
   div.innerHTML = catalogo.buscarPorTitulo("Kata").printLista();
 });




