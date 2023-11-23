import Catalogo from "./catalogo.js";
import GestionUsuarios from "./gestionUsuarios.js";
import Kata from "./kata.js";

let gestionUsuarios = new GestionUsuarios();
const divCat = document.querySelector("#divCatalogo");
const botonInicio = document.querySelector("#boton-Inicio");
const divBienvenida = document.querySelector("#divBienvenida")
const divRegistro = document.querySelector("#divRegistro");
const botonCrearKata = document.querySelector(".boton-crear_kata");
const botonRegistrar = document.querySelector("#boton-registro");
const mensaje = document.querySelector("#mensaje2-div");
const mensajeErrorLogin= document.querySelector("#mensajeLogin-div")
mensajeErrorLogin.style.display = "none";
divCat.style.display = "none";
botonCrearKata.style.display = "none"; 
divBienvenida.style.display = "block";

// -------------- INICIALIZAR USUARIOS ---------------- 

gestionUsuarios.registrarUsuario("admin", "Docente", "123");





// -------------- INICIO APP ---------------- 

let usuarioActual = null;
botonInicio.onclick = function()
{
   const nombre=document.querySelector("#loginUsername");
   const contrasenia= document.querySelector("#loginPassword");
   const nombreUsuario=nombre.value;
   const contraseniaLogin=contrasenia.value;
   console.log(nombreUsuario + " " + contraseniaLogin);
   if(gestionUsuarios.VerficarUsuario(nombreUsuario,contraseniaLogin)==true)
   {
        divCat.style.display = "block";
        divBienvenida.style.display = "none";
        botonCrearKata.style.display = "block"; 
        usuarioActual = gestionUsuarios.obtenerUsuario(nombreUsuario);
   }
   else{
        divBienvenida.style.display = "block";
        mensajeErrorLogin.textContente=gestionUsuarios.VerficarUsuario(nombreUsuario,contraseniaLogin);
        mensajeErrorLogin.style.display = "block";
   }
   mensaje.style.display = "none";
}
const botonVolverLogin = document.getElementsByClassName("boton-volver-login");

for(let i = 0; i < botonVolverLogin.length; i++){
    botonVolverLogin[i].onclick = function() {
        divCat.style.display = "none";
        divBienvenida.style.display = "block";
        divRegistro.style.display="none";
    };
}

botonRegistrar.onclick = function() {
    divRegistro.style.display = "block";
    divBienvenida.style.display = "none";
};







// -------------- INICIALIZAR CATALOGO ---------------- 

let divListaKatas = document.querySelector("#lista-katas-div");
let catalogo = new Catalogo();
let catalogoAMostrar = catalogo;

const kata1 = new Kata("Kata", "Validacion y formularios", "Intermedia");
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






// -------------- BOTONES EDITAR ---------------- 

const divEditar = document.querySelector("#divEditar");
const formEditarKata = document.querySelector("#editar_kata-form");
const botonesEditar = document.getElementsByClassName("boton-editar");
let tituloOriginal;

function actualizarEventoBotonesEditar(){
    for (let i = 0; i < botonesEditar.length; i++) {
        botonesEditar[i].onclick = function() {
            let kata = catalogoAMostrar.getLista()[i];
            tituloOriginal = kata.getTitulo();
            document.getElementById("titulo-kata-editar").value = kata.getTitulo();
            document.getElementById("categoria-kata-editar").value = kata.getCategoria();
            document.getElementById("dificultad-kata-editar").value = kata.getDificultad();
            document.getElementById("descripcion-kata-editar").value = kata.getDescripcion();
            divCat.style.display = "none";
            divEditar.style.display = "block";
        };
    }
}






// -------------- ELIMINAR KATA ---------------- 

const botonesEliminar = document.getElementsByClassName("boton-eliminar");

function activarBotonesEliminr(){
    for(let i = 0; i < botonesEliminar.length; i++){
        botonesEliminar[i].onclick = function(){
            let kata = catalogoAMostrar.getLista()[i];
            console.log(catalogo.eliminarKata(kata.titulo));
            generarListaKatasHTML();
        };
    }
}






// -------------- GENERAR CATALOGO ---------------- 

function generarListaKatasHTML(){

    const lista = catalogoAMostrar.getLista();
    let listaAMostrar = [];
    for (i = 0; i < catalogoAMostrar.getLista().length; i++){
        let kata = ("<div class='kata'><div class='title-kata'>" + lista[i].titulo + "</div><div class='category-kata'>"+ lista[i].categoria + "</div><div class='difficulty-kata'>"+ lista[i].dificultad + "</div><div class='description-kata'>"+ lista[i].descripcion + "</div><a href='#' class='boton-editar'>Editar</a> <a href='#' class='boton-eliminar'>Eliminar</a> </div>");
        listaAMostrar.push(kata);
    }
    
    divListaKatas.innerHTML = listaAMostrar.join(' ');
    actualizarEventoBotonesEditar();
    activarBotonesEliminr();
}
generarListaKatasHTML();





// -------------- BOTONES VOLVER ATRAS ---------------- 

const botonesVolver = document.getElementsByClassName("boton-volver");

for(let i = 0; i < botonesVolver.length; i++){
    botonesVolver[i].onclick = function() {
        divCat.style.display = "block";
        divEditar.style.display = "none";
        divCrear.style.display = "none";
    };
}



// -------------- FILTROS CATALOGO KATAS ---------------- 

const tituloABuscar = document.querySelector("#titulo");
const formBuscarTitulo = document.querySelector("#buscar-form");
const formBorrarFiltros = document.querySelector("#eliminarFiltros-form");
const filtroDificultad = document.querySelector("#filtrar-dificultad-kata");
const filtroCategoria = document.querySelector("#filtrar-categoria-kata");
const descripcionABuscar = document.querySelector("#descripcion");
const formBuscarDescripcion = document.querySelector("#descripcion-form");

formBorrarFiltros.addEventListener("submit", (event) => {
    event.preventDefault();
    catalogoAMostrar = catalogo;
    generarListaKatasHTML();
});

formBuscarTitulo.addEventListener("submit", (event) => {
    event.preventDefault();

    const titulo = tituloABuscar.value;
    const catalogo2 = new Catalogo();
    const kataBuscada=catalogo.buscarPorTitulo(titulo);
    if (kataBuscada != null) {
        catalogo2.insertarKata(kataBuscada);
    }
    catalogoAMostrar = catalogo2;
    generarListaKatasHTML();
});

filtroDificultad.addEventListener("change", (event) => {
    const dificultadSeleccionada = event.target.value;
    const catalogo2 = new Catalogo();

    if (dificultadSeleccionada == "Todas"){
        catalogoAMostrar = catalogo;
        generarListaKatasHTML();
    }
    else{
        catalogo.buscarPorDificultad(dificultadSeleccionada).forEach(kata => {
            catalogo2.insertarKata(kata)
        });
        catalogoAMostrar = catalogo2;
        generarListaKatasHTML();
    }
    
});

filtroCategoria.addEventListener("change", (event) => {
    const categoriaSeleccionada = event.target.value;
    const catalogo2 = new Catalogo();

    if (categoriaSeleccionada == "Todas"){
        catalogoAMostrar = catalogo;
        generarListaKatasHTML();
    }
    else{

        catalogo.buscarPorCategoria(categoriaSeleccionada).forEach(kata => {
            catalogo2.insertarKata(kata)
        });
        catalogoAMostrar = catalogo2;
        generarListaKatasHTML();
    }
    
});

formBuscarDescripcion.addEventListener("submit", (event) => {
    event.preventDefault();

    const descripcion = descripcionABuscar.value;
    const catalogo2 = new Catalogo();
    const kataBuscada=catalogo.buscarPorDescripcion(descripcion);
    if (kataBuscada != null) {
        catalogo2.insertarKata(kataBuscada);
    }
    catalogoAMostrar = catalogo2;
    generarListaKatasHTML();
});






// -------------- CREAR KATA ---------------- 

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
    botonCrearKata.style.display = "block"; 
    catalogoAMostrar = catalogo;
    generarListaKatasHTML();

});





// -------------- EDITAR KATA ---------------- 

const tituloKataEditar = document.querySelector("#titulo-kata-editar");
const categoriaKataEditar = document.querySelector("#categoria-kata-editar");
const dificultadKataEditar = document.querySelector("#dificultad-kata-editar");
const descripcionKataEditar = document.querySelector("#descripcion-kata-editar");

formEditarKata.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const titulo = tituloKataEditar.value;
    const categoria = categoriaKataEditar.value;
    const dificultad = dificultadKataEditar.value;
    const descripcion = descripcionKataEditar.value;
    // const kata = new Kata(titulo, categoria, dificultad, descripcion);
    
    mensaje.textContent = catalogo.editarKata(tituloOriginal, titulo, categoria, dificultad, descripcion);
    mensaje.style.display = "block";

    divCat.style.display = "block";
    divEditar.style.display = "none";

    catalogoAMostrar = catalogo;
    generarListaKatasHTML();

});






// -------------- REGISTRAR USUARIO ---------------- 

const formRegistrar = document.querySelector("#registrarse-form");
const usernameReg = document.querySelector("#username-registro");
const rol = document.querySelector("#rol-registro");
const passwordReg = document.querySelector("#password-registro");

formRegistrar.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const username = usernameReg.value;
    const rolSeleccionado = rol.value;
    const password = passwordReg.value;
    
    mensaje.textContent = gestionUsuarios.registrarUsuario(username, rolSeleccionado, password);
    mensaje.style.display = "block";
    divCat.style.display = "none";
    divRegistro.style.display = "none";
    divBienvenida.style.display="block";


    catalogoAMostrar = catalogo;
    generarListaKatasHTML();

});







// -------------- EDITAR DATOS ---------------- 

const divEditarUser = document.querySelector("#divEditarUsuario");

document.getElementById("boton-mi-perfil").onclick = function() {
    divCat.style.display = "none";
    divEditarUser.style.display = "block";
    document.getElementById("username-editar").value = usuarioActual.obtenerNombreDeUsuario();
    document.getElementById("password-editar").value = usuarioActual.obtenerContrasenia();
};

const formEditarUsuario = document.querySelector("#divEditarUsuario");
const usernameEdit = document.querySelector("#username-editar");
const passwordEdit = document.querySelector("#password-editar");

formEditarUsuario.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const userActual = usuarioActual.obtenerNombreDeUsuario();
    const nuevoUsername = usernameEdit.value;
    const nuevoPassword = passwordEdit.value;    
    mensaje.textContent = gestionUsuarios.editarUsuario(userActual, nuevoUsername, nuevoPassword);
    mensaje.style.display = "block";
    divCat.style.display = "block";
    divEditarUser.style.display = "none";
    catalogoAMostrar = catalogo;
    generarListaKatasHTML();
});