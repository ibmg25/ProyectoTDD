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
  
      const kata = new Kata("Kata nueva", "Sin Asignar", "Media", "nueva descripcion");
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

describe("Editar una kata del catalogo", () => {

    let catalogo;
    beforeEach(() => {
      catalogo = new Catalogo();
    });
  
    it("deberia devolver la kata que quiero editar", () => {
  
      const kata = new Kata("kataAEditar");
      catalogo.insertarKata(kata)
      expect(catalogo.editarKata("kataAEditar")).toEqual(kata);
    });
  
    
});

