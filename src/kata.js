class Kata{

  constructor(){
    this.titulo = "KATA";
    this.categoria = "";
    this.dificultad = "";
    this.descripcion = "";
  }

    printKata(){
      return "<div class='kata'><div class='title-kata'>" + this.titulo + "</div><div class='category-kata'>Ninguna</div><div class='difficulty-kata'>Media</div><div class='description-kata'>Descripción vacía</div></div>";
    }

    setDificultad(dif){
      this.dificultad = dif;
    }

    getDificultad(){
      return this.dificultad;
    }
}

export default Kata;