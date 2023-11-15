import Catalogo from "./catalogo.js";
import Kata from "./kata.js";

let div = document.querySelector("#resultado-div");

let catalogo = new Catalogo();

export {catalogo};

const kata1 = new Kata();
const kata2 = new Kata("Kata 2", "Validacion y formularios", "Intermedia", "nueva descripcion");
const kata3 = new Kata("Kata 3", "Validacion y formularios", "Facil", "nueva descripcion");
const kata4 = new Kata("Kata 4", "Validacion y formularios", "Dificil", "nueva descripcion");
const kata5 = new Kata("Kata 5", "Lógica y matematicas", "Intermedia", "nueva descripcion");
const kata6 = new Kata("Kata 6", "Lógica y matematicas", "Intermedia", "nueva descripcion");
catalogo.insertarKata(kata1);
catalogo.insertarKata(kata2);
catalogo.insertarKata(kata3);
catalogo.insertarKata(kata4);
catalogo.insertarKata(kata5);
catalogo.insertarKata(kata6);

const lista = catalogo.getLista();
let listaAMostrar = [];
for (i = 0; i < catalogo.getLista().length; i++){
    let kata = ("<div class='kata'><div class='title-kata'>" + lista[i].titulo + "</div><div class='category-kata'>"+ lista[i].categoria + "</div><div class='difficulty-kata'>"+ lista[i].dificultad + "</div><div class='description-kata'>"+ lista[i].descripcion + "</div><a href='#' class='boton-editar'>Editar</a></div>");
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

    if (dificultadSeleccionada == "Todas"){
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

    if (categoriaSeleccionada == "Todas"){
        const lista = catalogo.getLista();
        let listaAMostrar = [];
        for (i = 0; i < catalogo.getLista().length; i++){
            let kata = ("<div class='kata'><div class='title-kata'>" + lista[i].titulo + "</div><div class='category-kata'>"+ lista[i].categoria + "</div><div class='difficulty-kata'>"+ lista[i].dificultad + "</div><div class='description-kata'>"+ lista[i].descripcion + "</div></div>");
            listaAMostrar.push(kata);
        }
        div.innerHTML = listaAMostrar.join(' ');
    }
    else{

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
    }
    
});

const divCat = document.querySelector("#divCatalogo");
const divCrear = document.querySelector("#divCrear");

document.getElementById("nuevaKata").onclick = function() {
    divCat.style.display = "none";
    divCrear.style.display = "block";
};

const tituloKata = document.querySelector("#titulo-kata");
const categoriaKata = document.querySelector("#categoria-kata");
const dificultadKata = document.querySelector("#dificultad-kata");
const descripcionKata = document.querySelector("#descripcion-kata");
const formCrearKata = document.querySelector("#crear_kata-form");
const mensaje = document.querySelector("#mensaje2-div");

formCrearKata.addEventListener("submit", (event) => {
    event.preventDefault();
    const titulo = tituloKata.value;
    const categoria = categoriaKata.value;
    const dificultad = dificultadKata.value;
    const descripcion = descripcionKata.value;
    const kata = new Kata(titulo, categoria, dificultad, descripcion);
    
    mensaje.textContent = catalogo.insertarKata(kata);
    mensaje.style.display = "block";

    divCat.style.display = "block";
    divCrear.style.display = "none";

    const lista = catalogo.getLista();
    let listaAMostrar = [];
    for (i = 0; i < catalogo.getLista().length; i++){
        let kata = ("<div class='kata'><div class='title-kata'>" + lista[i].titulo + "</div><div class='category-kata'>"+ lista[i].categoria + "</div><div class='difficulty-kata'>"+ lista[i].dificultad + "</div><div class='description-kata'>"+ lista[i].descripcion + "</div></div>");
        listaAMostrar.push(kata);
    }

    div.innerHTML = listaAMostrar.join(' ');

});



/////////// Editar kata
const divEditar = document.querySelector("#divEditar");
const formEditarKata = document.querySelector("#editar_kata-form");
const botonesEditar = document.getElementsByClassName("boton-editar");


for (var i = 0; i < botonesEditar.length; i++) {
    (function(index) {
        botonesEditar[index].onclick = function() {
            const kata = catalogo.getLista()[index];
            document.getElementById("titulo-kata-editar").value = kata.getTitulo();
            document.getElementById("categoria-kata-editar").value = kata.getCategoria();
            document.getElementById("dificultad-kata-editar").value = kata.getDificultad();
            document.getElementById("descripcion-kata-editar").value = kata.getDescripcion();
            divCat.style.display = "none";
            divEditar.style.display = "block";
        };
    })(i);
}





formCrearKata.addEventListener("submit", (event) => {
    event.preventDefault();
    const titulo = tituloKata.value;
    const categoria = categoriaKata.value;
    const dificultad = dificultadKata.value;
    const descripcion = descripcionKata.value;
    const kata = new Kata(titulo, categoria, dificultad, descripcion);
    
    mensaje.textContent = catalogo.insertarKata(kata);
    mensaje.style.display = "block";

    divCat.style.display = "block";
    divEditar.style.display = "none";

    const lista = catalogo.getLista();
    let listaAMostrar = [];
    for (i = 0; i < catalogo.getLista().length; i++){
        let kata = ("<div class='kata'><div class='title-kata'>" + lista[i].titulo + "</div><div class='category-kata'>"+ lista[i].categoria + "</div><div class='difficulty-kata'>"+ lista[i].dificultad + "</div><div class='description-kata'>"+ lista[i].descripcion + "</div></div>");
        listaAMostrar.push(kata);
    }

    div.innerHTML = listaAMostrar.join(' ');

});