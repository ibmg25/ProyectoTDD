import Catalogo from "./catalogo.js";
import Kata from "./kata.js";

const div = document.querySelector("#resultado-div");

const catalogo = new Catalogo();

const kata1 = new Kata();
const kata2 = new Kata("Kata 2", "Ninguna", "Media", "nueva descripcion");
const kata3 = new Kata("Kata 3", "Ninguna", "Facil", "nueva descripcion");
const kata4 = new Kata("Kata 4", "Ninguna", "Dificil", "nueva descripcion");
const kata5 = new Kata("Kata 5", "Ninguna", "Media", "nueva descripcion");
const kata6 = new Kata("Kata 6", "Lógica y matematicas", "Media", "nueva descripcion");
catalogo.insertarKata(kata1);
catalogo.insertarKata(kata2);
catalogo.insertarKata(kata3);
catalogo.insertarKata(kata4);
catalogo.insertarKata(kata5);
catalogo.insertarKata(kata6);

div.innerHTML = catalogo.printLista();

const tituloABuscar = document.querySelector("#titulo");
const formBuscarTitulo = document.querySelector("#buscar-form");
const filtroDificultad = document.querySelector("#filtrar-dificultad-kata")
const filtroCategoria = document.querySelector("#filtrar-categoria-kata")
const filtroEstado=document.querySelector("#filtrar-Estado-kata");

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
    catalogo.buscarPorDificultad(dificultadSeleccionada).forEach(kata => {
        catalogo2.insertarKata(kata)
    });

    div.innerHTML = catalogo2.printLista();
    
});

filtroCategoria.addEventListener("change", (event) => {
    const categoriaSeleccionada = event.target.value;
    const catalogo2 = new Catalogo();
    catalogo.buscarPorCategoria(categoriaSeleccionada).forEach(kata => {
        catalogo2.insertarKata(kata)
    });

    div.innerHTML = catalogo2.printLista();
    
});
filtroEstado.addEventListener("change", (event) => {
   const estadoSeleccionado = event.target.value;
   const catalogo2=new Catalogo();
   catalogo.buscarPorEstado(estadoSeleccionado).forEach(kata => {
    catalogo2.insertarKata(kata)
});
    
});









