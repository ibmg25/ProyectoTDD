import Catalogo from "./catalogo.js";
import Kata from "./kata.js";

describe("Mostrar lista de katas", () => {

  let catalogo;
  beforeEach(() => {
    catalogo = new Catalogo();
  });

  it("deberia mostrar una lista de katas vacia", () => {

    expect(catalogo.printLista()).toEqual("<div class='catalog-message'>Sin katas aún. ¡Sé el primero en crear una!</div>");
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
    it("deberia mostrar la kata de una lista segun el nombre", () => {
      const kata1 = new Kata();
     catalogo.insertarKata(kata1);
     const kataEsperada = "<div class='kata'><div class='title-kata'>Kata</div><div class='category-kata'>Ninguna</div><div class='difficulty-kata'>Media</div><div class='description-kata'>Descripcion vacia</div></div>";
     expect(catalogo.buscarPorTitulo("Kata")).toEqual(kataEsperada);
   });
   it("debería mostrar una lista vacía si no hay katas de una categoría", () => {
    const katasPorCategoria = catalogo.buscarPorCategoria("Algoritmos");
    expect(katasPorCategoria.length).toEqual(0);
  });

  
  });
});


describe("Añadir una nueva kata al catalogo", () => {

  let catalogo;
  beforeEach(() => {
    catalogo = new Catalogo();
  });

  it("deberia devolver un mensaje de confirmacion exitoso al insertar una kata al catalogo", () => {

    const kata = new Kata();
    const mensajeEsperado = "Kata agregada al catálogo con éxito.";
    expect(catalogo.insertarKata(kata)).toEqual(mensajeEsperado);
  });

  it("deberia devolver un mensaje de confirmacion exitoso al insertar una nueva kata al catalogo", () => {

    const kata = new Kata("Kata nueva", "sin categoria", "media", "nueva descripcion");
    const mensajeEsperado = "Kata nueva agregada al catálogo con éxito.";
    expect(catalogo.insertarKata(kata)).toEqual(mensajeEsperado);
  });
});