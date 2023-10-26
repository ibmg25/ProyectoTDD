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

  it("deberia mostrar el estado por defecto de la Kata", () => {
    const kata1 = new Kata();
   catalogo.insertarKata(kata1)
   const kataEsperada = "<div class='kata'><div class='title-kata'>Kata</div><div class='category-kata'>Ninguna</div><div class='difficulty-kata'>Media</div><div class='description-kata'>Descripcion vacia</div><div class='estado-kata'>No terminado</div></div>";
   expect(kata1.getEstado()).toEqual("No terminado");
 });

 it("deberia mostrar el estado de la Kata si esta terminada", () => {
  const kata1 = new Kata();
  kata1.setEstado("terminado");
 catalogo.insertarKata(kata1)
 const kataEsperada = "<div class='kata'><div class='title-kata'>Kata</div><div class='category-kata'>Ninguna</div><div class='difficulty-kata'>Media</div><div class='description-kata'>Descripcion vacia</div><div class='estado-kata'>terminado</div></div>";
 expect(kata1.getEstado()).toEqual("terminado");
});
  
it("deberia mostrar solo las katas terminadas", () => {
  const kata1 = new Kata();
  const kata2 = new Kata();
  const kata3 = new Kata();
  kata1.setEstado("terminado");
  kata3.setEstado("terminado");
 catalogo.insertarKata(kata1);
  catalogo.insertarKata(kata2);
  catalogo.insertarKata(kata3);
  const katasPorEstado = catalogo.buscarPorEstado("terminado");
  expect(katasPorEstado.length).toEqual(2);
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

    const kata = new Kata("Kata nueva", "Ninguna", "Media", "nueva descripcion");
    const mensajeEsperado = "Kata nueva agregada al catálogo con éxito.";
    expect(catalogo.insertarKata(kata)).toEqual(mensajeEsperado);
  });

  it("deberia devolver un mensaje de error al insertar una nueva kata con una longitud de titulo invalido", () => {

    const kata = new Kata("ka", "Ninguna", "Media", "nueva descripcion");
    const mensajeEsperado = "Algunos campos podrían ser inválidos. Por favor, verifíquelos.";
    expect(catalogo.insertarKata(kata)).toEqual(mensajeEsperado);
  });

  it("deberia devolver un mensaje de error al insertar una nueva kata con caracteres de titulo invalido", () => {

    const kata = new Kata("kat$", "Ninguna", "Media", "nueva descripcion");
    const mensajeEsperado = "Algunos campos podrían ser inválidos. Por favor, verifíquelos.";
    expect(catalogo.insertarKata(kata)).toEqual(mensajeEsperado);
  });

  
  it("deberia devolver un mensaje de error al insertar una nueva kata con una categoria invalida", () => {

    const kata = new Kata("kata", "categoria invalida", "Media", "nueva descripcion");
    const mensajeEsperado = "Algunos campos podrían ser inválidos. Por favor, verifíquelos.";
    expect(catalogo.insertarKata(kata)).toEqual(mensajeEsperado);
  });

  it("deberia devolver un mensaje de error al insertar una nueva kata con una dificultad invalida", () => {

    const kata = new Kata("kata", "Ninguna", "easy", "nueva descripcion");
    const mensajeEsperado = "Algunos campos podrían ser inválidos. Por favor, verifíquelos.";
    expect(catalogo.insertarKata(kata)).toEqual(mensajeEsperado);
  });

  it("deberia devolver un mensaje de error al insertar una nueva kata con una descripcion invalida", () => {

    const kata = new Kata("kata", "Ninguna", "Media", "");
    const mensajeEsperado = "Algunos campos podrían ser inválidos. Por favor, verifíquelos.";
    expect(catalogo.insertarKata(kata)).toEqual(mensajeEsperado);
  });
});