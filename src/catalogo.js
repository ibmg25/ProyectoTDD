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
    this.listakatas.forEach(kata => {
      lista.push(kata.printKata());
    });
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
