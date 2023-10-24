
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
}

export default Catalogo;
