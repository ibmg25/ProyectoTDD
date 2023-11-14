import Catalogo from "./catalogo.js";
import Kata from "./kata.js";

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
    expect(catalogo.getLista()).toEqual([kata1]);
  });

  it("deberia mostrar una lista con varias katas", () => {

    const kata1 = new Kata();
    const kata2 = new Kata();
    catalogo.insertarKata(kata1);
    catalogo.insertarKata(kata2);
    expect(catalogo.getLista()).toEqual([kata1, kata2]);
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
    expect(catalogo.getLista()).toEqual([kata1, kata4]);
  });

  describe("Buscar Katas por parametro", () => {

    let catalogo;
    beforeEach(() => {
      catalogo = new Catalogo();
    });
  
    it("deberia mostrar el titulo de la kata", () => {
      const kata1 = new Kata();
      catalogo.insertarKata(kata1);
      expect(kata1.getTitulo()).toEqual("Kata");
    });

    it("deberia mostrar la kata de una lista segun el nombre", () => {
      const kata1 = new Kata();
     catalogo.insertarKata(kata1);
     expect(catalogo.buscarPorTitulo("Kata")).toEqual(kata1);
   });

   it("debería mostrar una lista vacía si no hay katas de una categoría", () => {
    const katasPorCategoria = catalogo.buscarPorCategoria("Algoritmos");
    expect(katasPorCategoria.length).toEqual(0);
  });

  it("debería mostrar una lista con las katas de una categoría", () => {
    const kata1 = new Kata();
    const kata2 = new Kata();
    const kata3 = new Kata();
    kata1.setCategoria("Lógica y matematicas");
    kata2.setCategoria("Validacion y formularios");
    kata3.setCategoria("Lógica y matematicas");
    catalogo.insertarKata(kata3);
    catalogo.insertarKata(kata1);
    catalogo.insertarKata(kata2);
    const katasPorCategoria = catalogo.buscarPorCategoria("Lógica y matematicas");
    expect(katasPorCategoria.length).toEqual(2);
  });
  
  it("debería mostrar una lista con las katas de otra categoría", () => {
    const kata1 = new Kata();
    const kata2 = new Kata();
    const kata3 = new Kata();
    kata1.setCategoria("Lógica y matematicas");
    kata2.setCategoria("Validacion y formularios");
    kata3.setCategoria("Lógica y matematicas");
    catalogo.insertarKata(kata3);
    catalogo.insertarKata(kata1);
    catalogo.insertarKata(kata2);
    const katasPorCategoria = catalogo.buscarPorCategoria("Validacion y formularios");
    expect(katasPorCategoria.length).toEqual(1);
  });

  it("debería mostrar una lista vacía si no hay katas de una dificultad", () => {
    const katasPorCategoria = catalogo.buscarPorCategoria("Dificil");
    expect(katasPorCategoria.length).toEqual(0);
  });

  it("debería mostrar una lista con las katas de una categoría", () => {
    const kata1 = new Kata();
    const kata2 = new Kata();
    const kata3 = new Kata();
    kata1.setDificultad("Facil");
    kata2.setDificultad("Dificil");
    kata3.setDificultad("Facil");
    catalogo.insertarKata(kata3);
    catalogo.insertarKata(kata1);
    catalogo.insertarKata(kata2);
    const katasPorCategoria = catalogo.buscarPorDificultad("Facil");
    expect(katasPorCategoria.length).toEqual(2);
  });
  
  });
});


