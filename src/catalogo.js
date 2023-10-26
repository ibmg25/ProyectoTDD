import Kata from "./kata.js";

class Catalogo{

  constructor() {
    this.listakatas = []; 
  }

  insertarKata(kata){
    this.listakatas.push(kata);
    if (kata.getTitulo().length>3 && kata.getTitulo().length<100) {
      return kata.getTitulo()+" agregada al catálogo con éxito.";
    }
    return "El título no es válido.";
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
}

export default Catalogo;
