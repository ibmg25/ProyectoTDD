import Catalogo from "./catalogo.js";
import Kata from "./kata.js";

const div = document.querySelector("#resultado-div");

const catalogo = new Catalogo();

const kata1 = new Kata();
const kata2 = new Kata("Kata 2", "Ninguna", "Media", "nueva descripcion");
const kata3 = new Kata("Kata 3", "Ninguna", "Facil", "nueva descripcion");
const kata4 = new Kata("Kata 4", "Ninguna", "Dificil", "nueva descripcion");
const kata5 = new Kata("Kata 5", "Ninguna", "Media", "nueva descripcion");
catalogo.insertarKata(kata1);
catalogo.insertarKata(kata2);
catalogo.insertarKata(kata3);
catalogo.insertarKata(kata4);
catalogo.insertarKata(kata5);

div.innerHTML = catalogo.printLista();

const tituloABuscar = document.querySelector("#titulo");
const formBuscarTitulo = document.querySelector("#buscar-form");
const filtroDificultad = document.querySelector("#filtrar-dificultad-kata")

formBuscarTitulo.addEventListener("submit", (event) => {
   event.preventDefault();

   const titulo = tituloABuscar.value;
   const catalogo2 = new Catalogo();
   const kataBuscada=catalogo.buscarPorTitulo(titulo);
   if (kataBuscada != null) {
    catalogo2.insertarKata(kataBuscada);
   }
   div.innerHTML = catalogo2.printLista();
});

filtroDificultad.addEventListener("change", (event) => {
    const dificultadSeleccionada = event.target.value;
    const catalogo2 = new Catalogo();
    
});
// const tituloKata = document.querySelector("#titulo-kata");
// const categoriaKata = document.querySelector("#categoria-kata");
// const dificultadKata = document.querySelector("#dificultad-kata");
// const descripcionKata = document.querySelector("#descripcion-kata");
// const formCrearKata = document.querySelector("#crear_kata-form");
// const mensaje = document.querySelector("#mensaje-div");

// // 
// // 
//  

// 


// 

// formCrearKata.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const titulo = tituloKata.value;
//     const categoria = categoriaKata.value;
//     const dificultad = dificultadKata.value;
//     const descripcion = descripcionKata.value;

//     const kata = new Kata(titulo, categoria, dificultad, descripcion);
    
    
//     mensaje.textContent = catalogo.insertarKata(kata);
//     mensaje.style.display = "block";
// });








