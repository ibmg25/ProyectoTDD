class Kata{

  constructor(){
    this.titulo = "Kata";
    this.categoria = "Ninguna";
    this.dificultad = "Media";
    this.descripcion = "Descripcion vacia";
  }

    printKata(){
      return "<div class='kata'><div class='title-kata'>" + this.titulo + "</div><div class='category-kata'>"+ this.categoria + "</div><div class='difficulty-kata'>"+ this.dificultad + "</div><div class='description-kata'>"+ this.descripcion + "</div></div>";
    }

    setDificultad(dif){
      this.dificultad = dif;
    }

    getDificultad(){
      return this.dificultad;
    }
}

export default Kata;