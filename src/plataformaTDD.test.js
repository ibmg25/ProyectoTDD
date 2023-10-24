import Catalogo from "./catalogo.js";


class Kata{
  printKata(){
    return "<div><p>Título: Kata</p><p>Descripción: Descripción vacía</p><p>Categoría: Ninguna</p><p>Dificultad: Media</p></div>";
  }
}

describe("Mostrar lista de katas", () => {

  let catalogo;
  beforeEach(() => {
    catalogo = new Catalogo();
  });

  it("deberia mostrar una lista de katas vacia", () => {

    expect(catalogo.getLista()).toEqual([]);
  });

  it("deberia mostrar una lista con una kata", () => {

    const kata1 = new Kata();
    catalogo.insertarKata(kata1)
    const kataEsperada = "<div><p>Título: Kata</p><p>Descripción: Descripción vacía</p><p>Categoría: Ninguna</p><p>Dificultad: Media</p></div>"
    expect(catalogo.getLista()).toEqual(kataEsperada);
  });
});


