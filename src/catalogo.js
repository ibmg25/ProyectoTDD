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

  getLista(){
    return this.listakatas;
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

  editarKata(kataAEditar, nuevoTitulo = this.buscarPorTitulo(kataAEditar).getTitulo(), nuevaCategoria = this.buscarPorTitulo(kataAEditar).getCategoria(), nuevaDificultad = this.buscarPorTitulo(kataAEditar).getDificultad(), nuevaDescripcion = this.buscarPorTitulo(kataAEditar).getDescripcion() ){
    const kataEditada = this.buscarPorTitulo(kataAEditar);
    kataEditada.setTitulo(nuevoTitulo);
    kataEditada.setCategoria(nuevaCategoria);
    kataEditada.setDificultad(nuevaDificultad);
    kataEditada.setDescripcion(nuevaDescripcion);
    return kataEditada;
  }
}

export default Catalogo;
