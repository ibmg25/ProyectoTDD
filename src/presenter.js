import Catalogo from "./catalogo.js";
import Kata from "./kata.js";

let div = document.querySelector("#resultado-div");

let catalogo = new Catalogo();

export {catalogo};

const kata1 = new Kata();
const kata2 = new Kata("Kata 2", "Validacion y formularios", "Media", "nueva descripcion");
const kata3 = new Kata("Kata 3", "Validacion y formularios", "Facil", "nueva descripcion");
const kata4 = new Kata("Kata 4", "Validacion y formularios", "Dificil", "nueva descripcion");
const kata5 = new Kata("Kata 5", "Lógica y matematicas", "Media", "nueva descripcion");
const kata6 = new Kata("Kata 6", "Lógica y matematicas", "Media", "nueva descripcion");
catalogo.insertarKata(kata1);
catalogo.insertarKata(kata2);
catalogo.insertarKata(kata3);
catalogo.insertarKata(kata4);
catalogo.insertarKata(kata5);
catalogo.insertarKata(kata6);

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

    if (dificultadSeleccionada == "Ninguna"){
        const lista = catalogo.getLista();
        let listaAMostrar = [];
        for (i = 0; i < catalogo.getLista().length; i++){
            let kata = ("<div class='kata'><div class='title-kata'>" + lista[i].titulo + "</div><div class='category-kata'>"+ lista[i].categoria + "</div><div class='difficulty-kata'>"+ lista[i].dificultad + "</div><div class='description-kata'>"+ lista[i].descripcion + "</div></div>");
            listaAMostrar.push(kata);
        }
        div.innerHTML = listaAMostrar.join(' ');
    }
    else{
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
    }
    
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




