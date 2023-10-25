import Catalogo from "./catalogo.js";
import Kata from "./kata.js";

describe("Mostrar lista de katas", () => {

  let catalogo;
  beforeEach(() => {
    catalogo = new Catalogo();
  });

  it("deberia mostrar una lista de katas vacia", () => {

    expect(catalogo.printLista()).toEqual('');
  });

  it("deberia mostrar una lista con una kata", () => {

    const kata1 = new Kata();
    catalogo.insertarKata(kata1)
    const kataEsperada = "<div class='kata'><div class='title-kata'>Kata</div><div class='category-kata'>Ninguna</div><div class='difficulty-kata'>Media</div><div class='description-kata'>Descripcion vacia</div></div>";
    expect(catalogo.printLista()).toEqual(kataEsperada);
  });

  it("deberia mostrar una lista con varias katas", () => {

    const kata1 = new Kata();
    const kata2 = new Kata();
    catalogo.insertarKata(kata1);
    catalogo.insertarKata(kata2);
    const listaEsperada = "<div class='kata'><div class='title-kata'>Kata</div><div class='category-kata'>Ninguna</div><div class='difficulty-kata'>Media</div><div class='description-kata'>Descripcion vacia</div></div> <div class='kata'><div class='title-kata'>Kata</div><div class='category-kata'>Ninguna</div><div class='difficulty-kata'>Media</div><div class='description-kata'>Descripcion vacia</div></div>";
    expect(catalogo.printLista()).toEqual(listaEsperada);
  });
});

describe("Filtrar katas por dificultad", () => {

  let catalogo;
  beforeEach(() => {
    catalogo = new Catalogo();
  });

  let kata;
  beforeEach(() => {
    kata = new Kata();
  });

  it("deberia mostrar la dificultad de una kata Media", () => {
    kata.setDificultad("Media");
    expect(kata.getDificultad()).toEqual("Media");
  });

  it("deberia asignar la dificultad de una kata Facil", () => {
    kata.setDificultad("Facil");
    expect(kata.getDificultad()).toEqual("Facil");
  });

  it("deberia asignar la dificultad de una kata Dificil", () => {
    kata.setDificultad("Dificil");
    expect(kata.getDificultad()).toEqual("Dificil");
  });

  it("deberia mostrar una lista con katas de dificultad Facil", () => {

    const kata1 = new Kata();
    const kata2 = new Kata();
    const kata3 = new Kata();
    const kata4 = new Kata();
    kata1.setDificultad("Facil");
    kata4.setDificultad("Facil");
    kata2.setDificultad("Dificil");
    kata3.setDificultad("Media");
    if (kata1.getDificultad() == "Facil")
      catalogo.insertarKata(kata1);
    if (kata2.getDificultad() == "Facil")
      catalogo.insertarKata(kata2);
    if (kata3.getDificultad() == "Facil")
      catalogo.insertarKata(kata3);
    if (kata4.getDificultad() == "Facil")
      catalogo.insertarKata(kata4);
    const listaEsperada = "<div class='kata'><div class='title-kata'>Kata</div><div class='category-kata'>Ninguna</div><div class='difficulty-kata'>Facil</div><div class='description-kata'>Descripcion vacia</div></div> <div class='kata'><div class='title-kata'>Kata</div><div class='category-kata'>Ninguna</div><div class='difficulty-kata'>Facil</div><div class='description-kata'>Descripcion vacia</div></div>";
    expect(catalogo.printLista()).toEqual(listaEsperada);
  });
  describe("Buscar Katas por parametro", () => {

    let catalogo;
    beforeEach(() => {
      catalogo = new Catalogo();
    });
  
    it("deberia mostrar el titulo de la cata", () => {
       const kata1 = new Kata();
      catalogo.insertarKata(kata1)
      const kataEsperada = "<div class='kata'><div class='title-kata'>Kata</div><div class='category-kata'>Ninguna</div><div class='difficulty-kata'>Media</div><div class='description-kata'>Descripcion vacia</div></div>";
      expect(kata1.getTitulo()).toEqual("Kata");
    });
  
  });
});
