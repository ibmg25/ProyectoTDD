import Kata from "./kata.js";
import Validador from "./validador.js";

class Catalogo{

  constructor() {
    this.listakatas = []; 
  }


  insertarKata(kata){
    const validador = new Validador();

    if (validador.validarKata(kata)) {
      this.listakatas.push(kata);
      return kata.getTitulo()+" agregada al catálogo con éxito.";
    }
    return "Algunos campos podrían ser inválidos. Por favor, verifíquelos.";
  }
  printLista() {

    const lista = [];
    if (this.listakatas.length===0) {
      lista.push("<div class='catalog-message'>Sin katas aún. ¡Sé el primero en crear una!</div>");
    }
    else{
      this.listakatas.forEach(kata => {
        lista.push(kata.printKata());
      });
    }
    
    return lista.join(' ');

  }
  buscarPorTitulo(tit)
  {  
     const k = this.listakatas.find(kata => kata.getTitulo() === tit ); 
     return k;

  }
  buscarPorCategoria(categoria) {
    return this.listakatas.filter(kata => kata.getCategoria() === categoria); 
  }

  buscarPorDificultad(dif) {
    return this.listakatas.filter(kata => kata.getDificultad() === dif); 
  }

  buscarPorEstado(estado) {
    return this.listakatas.filter(kata => kata.getEstado() === estado); 
  }
  cambiarEstadoKata(tituloKata){
    const kataAModificar = this.buscarPorTitulo(tituloKata);
    this.listakatas.pop();
    this.listakatas.push(kataAModificar.setEstado("Terminado"));
    return "<div class='kata'><div class='title-kata'>Kata</div><div class='category-kata'>Ninguna</div><div class='difficulty-kata'>Media</div><div class='description-kata'>Descripcion vacia</div><div class='estado-kata'>Terminado</div></div>";
  }
}

export default Catalogo;
