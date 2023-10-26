import Kata from "./kata.js";

class Catalogo{

  constructor() {
    this.listakatas = []; 
  }

  insertarKata(kata){
    this.listakatas.push(kata);
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
    for (const kata of this.listakatas) {
      if (kata.getTitulo() == tit) {
        return kata.printKata();
        }
    }
  }
}

export default Catalogo;
