
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
  buscaPorTitulo(tit)
  {
    for (i = 0; i < this.listakatas.length; i++) {
        
    }
  }
}

export default Catalogo;
