class Kata{

  constructor(titulo = "Kata", categoria = "Sin Asignar", dificultad = "Media", descripcion = "Descripcion vacia"){
    this.titulo = titulo;
    this.categoria = categoria;
    this.dificultad = dificultad;
    this.descripcion = descripcion;
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