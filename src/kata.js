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

    setTitulo(tit){
      this.titulo = tit;
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

    setDescripcion(desc){
      this.descripcion = desc;
    }

    getDescripcion(){
      return this.descripcion;
    }
}

export default Kata;