describe("Editar una kata del catalogo", () => {
    it("deberia devolver la kata que quiero editar", () => {
      cy.visit("/");
      cy.get('.boton-editar').eq(0).click();
      cy.get("#titulo-kata-editar").should("have.value", "Kata");
      cy.get("#categoria-kata-editar").should("have.value", "Sin Asignar");
      cy.get("#dificultad-kata-editar").should("have.value", "Intermedia");
      cy.get("#descripcion-kata-editar").should("have.value", "Descripcion vacia");
    });
 
    it("deberia devolver la kata con los valores que quiero modificar", () => {
        cy.visit("/");
        cy.get('.boton-editar').eq(0).click();
        cy.get("#titulo-kata-editar").clear().type("NuevoTitulo");
        cy.get("#categoria-kata-editar").clear().type("Validacion y formularios");
        cy.get("#dificultad-kata-editar").select("Facil");
        cy.get("#descripcion-kata-editar").clear().type("Nueva descripcion");
        cy.get("#titulo-kata-editar").should("have.value", "NuevoTitulo");
        cy.get("#categoria-kata-editar").should("have.value", "Validacion y formularios");
        cy.get("#dificultad-kata-editar").should("have.value", "Facil");
        cy.get("#descripcion-kata-editar").should("have.value", "Nueva descripcion");
    });

    it("deberia devolver la kata con los valores que quiero modificar", () => {
        cy.visit("/");
        cy.get('.boton-editar').eq(0).click();
        cy.get("#titulo-kata-editar").clear().type("NuevoTitulo");
        cy.get("#categoria-kata-editar").clear().type("Validacion y formularios");
        cy.get("#dificultad-kata-editar").select("Facil");
        cy.get("#descripcion-kata-editar").clear().type("Nueva descripcion");
        cy.get("input[type='submit']").eq(3).click();
        cy.get("#mensaje2-div").should("contain", "Kata editada con éxito.");
    });
});

  

  
//   describe("Editar una kata del catalogo", () => {

//     let catalogo;
//     beforeEach(() => {
//       catalogo = new Catalogo();
//     });
  
//     it("deberia devolver la kata que quiero editar", () => {
  
//       const kata = new Kata("kataAEditar");
//       catalogo.insertarKata(kata)
//       expect(catalogo.editarKata("kataAEditar")).toEqual(kata);
//     });
  
//     it("deberia devolver la kata que quiero editar con un parametro editado", () => {
  
//         const kata = new Kata("kataAEditar");
//         const kataEsperada = new Kata("nuevoTitulo");
//         catalogo.insertarKata(kata)
//         expect(catalogo.editarKata("kataAEditar", "nuevoTitulo")).toEqual(kataEsperada);
//     });

    
//     it("deberia devolver la kata que quiero editar con varios parametros editados", () => {
  
//         const kata = new Kata("kataAEditar");
//         const kataEsperada = new Kata("nuevoTitulo", "Validacion y formularios", "Facil", "Nueva descripcion");
//         catalogo.insertarKata(kata)
//         expect(catalogo.editarKata("kataAEditar", "nuevoTitulo", "Validacion y formularios", "Facil", "Nueva descripcion")).toEqual(kataEsperada);
//     });
// });