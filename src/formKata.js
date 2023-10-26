import Catalogo from "./catalogo.js";
import Kata from "./kata.js";

const tituloKata = document.querySelector("#titulo-kata");
const categoriaKata = document.querySelector("#categoria-kata");
const dificultadKata = document.querySelector("#dificultad-kata");
const estadoKata = document.querySelector("#estado-kata");
const descripcionKata = document.querySelector("#descripcion-kata");
const formCrearKata = document.querySelector("#crear_kata-form");
const mensaje = document.querySelector("#mensaje-div");

const catalogo = new Catalogo();


formCrearKata.addEventListener("submit", (event) => {
    event.preventDefault();

    const titulo = tituloKata.value;
    const categoria = categoriaKata.value;
    const dificultad = dificultadKata.value;
    const descripcion = descripcionKata.value;
    const estado = estadoKata.value;

    const kata = new Kata(titulo, categoria, dificultad, descripcion, estado);
    
    console.log(kata.getDificultad());
    mensaje.textContent = catalogo.insertarKata(kata);
    mensaje.style.display = "block";
});
