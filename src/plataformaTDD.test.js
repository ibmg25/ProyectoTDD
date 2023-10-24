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
    const kataEsperada = "<div><p>Título: Kata</p><p>Descripción: Descripción vacía</p><p>Categoría: Ninguna</p><p>Dificultad: Media</p></div>";
    expect(catalogo.printLista()).toEqual(kataEsperada);
  });

  it("deberia mostrar una lista con varias katas", () => {

    const kata1 = new Kata();
    const kata2 = new Kata();
    catalogo.insertarKata(kata1);
    catalogo.insertarKata(kata2);
    const listaEsperada = "<div><p>Título: Kata</p><p>Descripción: Descripción vacía</p><p>Categoría: Ninguna</p><p>Dificultad: Media</p></div> <div><p>Título: Kata</p><p>Descripción: Descripción vacía</p><p>Categoría: Ninguna</p><p>Dificultad: Media</p></div>";
    expect(catalogo.printLista()).toEqual(listaEsperada);
  });
});

describe("Filtrar katas por dificultad", () => {

  let kata;
  beforeEach(() => {
    kata = new Kata();
  });

  it("deberia mostrar la dificultad de una kata (Media)", () => {

    expect(kata.getDificultad()).toEqual("Media");
  });

  it("deberia asignar la dificultad de una kata", () => {
    kata.setDificultad("Facil");
    expect(kata.getDificultad()).toEqual("Facil");
  });

});
