import Catalogo from "./catalogo.js";



describe("Mostrar lista de katas", () => {
  const catalogo = new Catalogo();
  it("deberia mostrar una lista de katas vacia", () => {

    expect(catalogo.getLista()).toEqual([]);
  });
});


