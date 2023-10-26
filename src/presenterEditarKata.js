import Catalogo from "./catalogo.js";
import Kata from "./kata.js";

const formEditarKata=document.querySelector("#editar_kata-form");
const tituloKata = document.querySelector("#titulo-kata");
const categoriaKata = document.querySelector("#categoria-kata");
const dificultadKata = document.querySelector("#dificultad-kata");
const descripcionKata = document.querySelector("#descripcion-kata");

formEditarKata.addEventListener("submit", (event) => {
     event.preventDefault();

    const titulo = tituloKata.value;
    const categoria = categoriaKata.value;
    const dificultad = dificultadKata.value;
    const descripcion = descripcionKata.value;

    const kata = new Kata(titulo, categoria, dificultad, descripcion);
    
    
    mensaje.textContent = catalogo.insertarKata(kata);
    mensaje.style.display = "block";
});