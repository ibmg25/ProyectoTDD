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

const tituloKata = document.querySelector("#titulo-kata");
const categoriaKata = document.querySelector("#categoria-kata");
const dificultadKata = document.querySelector("#dificultad-kata");
const descripcionKata = document.querySelector("#descripcion-kata");
const formCrearKata = document.querySelector("#crear_kata-form");
const mensaje = document.querySelector("#mensaje-div");

const lista = catalogo.getLista();
let listaAMostrar = [];
for (i = 0; i < catalogo.getLista().length; i++){
    let kata = ("<div class='kata'><div class='title-kata'>" + lista[i].titulo + "</div><div class='category-kata'>"+ lista[i].categoria + "</div><div class='difficulty-kata'>"+ lista[i].dificultad + "</div><div class='description-kata'>"+ lista[i].descripcion + "</div></div>");
    listaAMostrar.push(kata);
}

div.innerHTML = listaAMostrar.join(' ');

const tituloABuscar = document.querySelector("#titulo");
const formBuscarTitulo = document.querySelector("#buscar-form");
const formBorrarFiltros = document.querySelector("#eliminarFiltros-form");
const filtroDificultad = document.querySelector("#filtrar-dificultad-kata");
const filtroCategoria = document.querySelector("#filtrar-categoria-kata");

formBorrarFiltros.addEventListener("submit", (event) => {
    const lista = catalogo.getLista();
    let listaAMostrar = [];
    for (i = 0; i < catalogo.getLista().length; i++){
        let kata = ("<div class='kata'><div class='title-kata'>" + lista[i].titulo + "</div><div class='category-kata'>"+ lista[i].categoria + "</div><div class='difficulty-kata'>"+ lista[i].dificultad + "</div><div class='description-kata'>"+ lista[i].descripcion + "</div></div>");
        listaAMostrar.push(kata);
    }

    div.innerHTML = listaAMostrar.join(' ');
})

formBuscarTitulo.addEventListener("submit", (event) => {
    event.preventDefault();

    const titulo = tituloABuscar.value;
    const catalogo2 = new Catalogo();
    const kataBuscada=catalogo.buscarPorTitulo(titulo);
    if (kataBuscada != null) {
        catalogo2.insertarKata(kataBuscada);
    }
    
    const lista = catalogo2.getLista();
    let listaAMostrar = [];
    for (i = 0; i < catalogo2.getLista().length; i++){
        let kata = ("<div class='kata'><div class='title-kata'>" + lista[i].titulo + "</div><div class='category-kata'>"+ lista[i].categoria + "</div><div class='difficulty-kata'>"+ lista[i].dificultad + "</div><div class='description-kata'>"+ lista[i].descripcion + "</div></div>");
        listaAMostrar.push(kata);
    }
    div.innerHTML = listaAMostrar.join(' ');
});

filtroDificultad.addEventListener("change", (event) => {
    const dificultadSeleccionada = event.target.value;
    const catalogo2 = new Catalogo();
    catalogo.buscarPorDificultad(dificultadSeleccionada).forEach(kata => {
        catalogo2.insertarKata(kata)
    });

    const lista = catalogo2.getLista();
    let listaAMostrar = [];
    for (i = 0; i < catalogo2.getLista().length; i++){
        let kata = ("<div class='kata'><div class='title-kata'>" + lista[i].titulo + "</div><div class='category-kata'>"+ lista[i].categoria + "</div><div class='difficulty-kata'>"+ lista[i].dificultad + "</div><div class='description-kata'>"+ lista[i].descripcion + "</div></div>");
        listaAMostrar.push(kata);
    }
    div.innerHTML = listaAMostrar.join(' ');
    
});

filtroCategoria.addEventListener("change", (event) => {
    const categoriaSeleccionada = event.target.value;
    const catalogo2 = new Catalogo();
    catalogo.buscarPorCategoria(categoriaSeleccionada).forEach(kata => {
        catalogo2.insertarKata(kata)
    });

    const lista = catalogo2.getLista();
    let listaAMostrar = [];
    for (i = 0; i < catalogo2.getLista().length; i++){
        let kata = ("<div class='kata'><div class='title-kata'>" + lista[i].titulo + "</div><div class='category-kata'>"+ lista[i].categoria + "</div><div class='difficulty-kata'>"+ lista[i].dificultad + "</div><div class='description-kata'>"+ lista[i].descripcion + "</div></div>");
        listaAMostrar.push(kata);
    }
    div.innerHTML = listaAMostrar.join(' ');
    
});

formCrearKata.addEventListener("submit", (event) => {
    event.preventDefault();

    const titulo = tituloKata.value;
    const categoria = categoriaKata.value;
    const dificultad = dificultadKata.value;
    const descripcion = descripcionKata.value;

    const kata = new Kata(titulo, categoria, dificultad, descripcion);
    
    
    mensaje.textContent = catalogo.insertarKata(kata);
    mensaje.style.display = "block";
});






