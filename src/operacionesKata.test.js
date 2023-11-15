import Catalogo from "./catalogo.js";
import Kata from "./kata.js";

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
  
      const kata = new Kata("Kata nueva", "Sin Asignar", "Intermedia", "nueva descripcion");
      const mensajeEsperado = "Kata nueva agregada al catálogo con éxito.";
      expect(catalogo.insertarKata(kata)).toEqual(mensajeEsperado);
    });
  
    it("deberia devolver un mensaje de error al insertar una nueva kata con una longitud de titulo invalido", () => {
  
      const kata = new Kata("ka", "Ninguna", "Intermedia", "nueva descripcion");
      const mensajeEsperado = "Algunos campos podrían ser inválidos. Por favor, verifíquelos.";
      expect(catalogo.insertarKata(kata)).toEqual(mensajeEsperado);
    });
  
    it("deberia devolver un mensaje de error al insertar una nueva kata con caracteres de titulo invalido", () => {
  
      const kata = new Kata("kat$", "Ninguna", "Intermedia", "nueva descripcion");
      const mensajeEsperado = "Algunos campos podrían ser inválidos. Por favor, verifíquelos.";
      expect(catalogo.insertarKata(kata)).toEqual(mensajeEsperado);
    });
  
    
    it("deberia devolver un mensaje de error al insertar una nueva kata con una categoria invalida", () => {
  
      const kata = new Kata("kata", "categoria invalida", "Intermedia", "nueva descripcion");
      const mensajeEsperado = "Algunos campos podrían ser inválidos. Por favor, verifíquelos.";
      expect(catalogo.insertarKata(kata)).toEqual(mensajeEsperado);
    });
  
    it("deberia devolver un mensaje de error al insertar una nueva kata con una dificultad invalida", () => {
  
      const kata = new Kata("kata", "Ninguna", "easy", "nueva descripcion");
      const mensajeEsperado = "Algunos campos podrían ser inválidos. Por favor, verifíquelos.";
      expect(catalogo.insertarKata(kata)).toEqual(mensajeEsperado);
    });
  
    it("deberia devolver un mensaje de error al insertar una nueva kata con una descripcion invalida", () => {
  
      const kata = new Kata("kata", "Ninguna", "Intermedia", "");
      const mensajeEsperado = "Algunos campos podrían ser inválidos. Por favor, verifíquelos.";
      expect(catalogo.insertarKata(kata)).toEqual(mensajeEsperado);
    });
});

describe("Editar una kata del catalogo", () => {

    let catalogo;
    beforeEach(() => {
      catalogo = new Catalogo();
    });
  
    it("deberia devolver la kata que quiero editar", () => {
  
      const kata = new Kata("kataAEditar");
      catalogo.insertarKata(kata);
      expect(catalogo.buscarPorTitulo("kataAEditar")).toEqual(kata);
    });
  
    it("deberia devolver la kata que quiero editar con un parametro editado", () => {
  
        const kata = new Kata("kataAEditar");
        const kataEsperada = new Kata("nuevoTitulo");
        catalogo.insertarKata(kata);
        catalogo.editarKata("kataAEditar", "nuevoTitulo");
        expect(catalogo.buscarPorTitulo("nuevoTitulo")).toEqual(kataEsperada);
    });

    
    it("deberia devolver la kata que quiero editar con varios parametros editados", () => {
  
        const kata = new Kata("kataAEditar");
        const kataEsperada = new Kata("nuevoTitulo", "Validacion y formularios", "Facil", "Nueva descripcion");
        catalogo.insertarKata(kata);
        catalogo.editarKata("kataAEditar", "nuevoTitulo", "Validacion y formularios", "Facil", "Nueva descripcion");
        expect(catalogo.buscarPorTitulo("nuevoTitulo")).toEqual(kataEsperada);
    });


    it("deberia devolver un mensaje afirmando que la kata se ha editado exitosamente", () => {
  
      const kata = new Kata("kataAEditar");
      catalogo.insertarKata(kata);
      const mensajeEdicion = "Kata editada con éxito.";
      expect(catalogo.editarKata("kataAEditar", "nuevoTitulo", "Validacion y formularios", "Facil", "Nueva descripcion")).toEqual(mensajeEdicion);
  });


  it("deberia devolver una lista de katas con una kata editada", () => {
  
    const kata1 = new Kata();
    const kata2 = new Kata("kataAEditar");
    const kataEditada = new Kata("nuevoTitulo", "Validacion y formularios", "Facil", "Nueva descripcion");
    catalogo.insertarKata(kata1);
    catalogo.insertarKata(kata2);
    catalogo.editarKata("kataAEditar", "nuevoTitulo", "Validacion y formularios", "Facil", "Nueva descripcion");
    const listaEsperada = [kata1, kataEditada];
    expect(catalogo.getLista()).toEqual(listaEsperada);
});

});

