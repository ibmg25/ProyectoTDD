class Kata{

  constructor(){
    this.dificultad = "Media";
  }

    printKata(){
      return "<div><p>Título: Kata</p><p>Descripción: Descripción vacía</p><p>Categoría: Ninguna</p><p>Dificultad: Media</p></div>";
    }

    setDificultad(dif){
      this.dificultad = dif;
    }

    getDificultad(){
      return this.dificultad;
    }
}

export default Kata;