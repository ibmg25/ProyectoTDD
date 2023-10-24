
class Catalogo{

  constructor() {
    this.listakatas = []; 
  }

  insertarKata(kata){
    this.listakatas.push(kata);
  }
  printLista() {
    if (this.listakatas.length>0){
      return this.listakatas[0].printKata();
    }
    return [];
  }
}

export default Catalogo;
