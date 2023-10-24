class Kata{

  constructor(){
    this.dificultad = "Media";
  }

    printKata(){
      return "<div class='kata'><div class='title-kata'>Kata</div><div class='description-kata'>Descripción vacía</div><div class='category-kata'>Ninguna</div><div class='difficulty-kata'>Media</div></div>";
    }

    setDificultad(dif){
      this.dificultad = dif;
    }

    getDificultad(){
      return this.dificultad;
    }
}

export default Kata;