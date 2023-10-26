class Kata{

  constructor(titulo = "Kata", categoria = "Ninguna", dificultad = "Media", descripcion = "Descripcion vacia", estado = "No terminado"){
    this.titulo = titulo;
    this.categoria = categoria;
    this.dificultad = dificultad;
    this.descripcion = descripcion;
    this.estado = estado;
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
    getTitulo(){
      return this.titulo;
    }

    setCategoria(cat){
      this.categoria = cat;
    }

    getCategoria(){
      return this.categoria;
    }

    getDescripcion(){
      return this.descripcion;
    }
    
}

export default Kata;