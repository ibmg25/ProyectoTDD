beforeEach(() => {
    cy.visit("/");
    cy.get('#boton-registro').click();
    cy.get("#registrarse-form").should("be.visible");
    cy.get("#username-registro").type("user");
    cy.get("#password-registro").type("123");
    cy.get("input[type='submit']").eq(4).click();
    cy.get("#loginUsername").type("user");
    cy.get("#loginPassword").type("123");
    cy.get("#boton-Inicio").click();
  });


describe("Editar una kata del catalogo", () => {
    it("deberia devolver la kata que quiero editar", () => {
      cy.get('.boton-editar').eq(0).click();
      cy.get("#titulo-kata-editar").should("have.value", "Kata");
      cy.get("#categoria-kata-editar").should("have.value", "Validacion y formularios");
      cy.get("#dificultad-kata-editar").should("have.value", "Intermedia");
      cy.get("#descripcion-kata-editar").should("have.value", "Descripcion vacia");
    });
 
    it("deberia devolver la kata con los valores que quiero modificar", () => {
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

    it("deberia devolver un mensaje confirmando que la kata ha sido editada exitosamente", () => {
        cy.get('.boton-editar').eq(0).click();
        cy.get("#titulo-kata-editar").clear().type("NuevoTitulo");
        cy.get("#categoria-kata-editar").clear().type("Validacion y formularios");
        cy.get("#dificultad-kata-editar").select("Facil");
        cy.get("#descripcion-kata-editar").clear().type("Nueva descripcion");
        cy.get("input[type='submit']").eq(3).click();
        cy.get("#mensaje2-div").should("contain", "Kata editada con éxito.");
    });

    it("deberia mostrar la kata con la nueva informacion en el catalogo", () => {
        cy.get('.boton-editar').eq(0).click();
        cy.get("#titulo-kata-editar").clear().type("NuevoTitulo");
        cy.get("#categoria-kata-editar").clear().type("Validacion y formularios");
        cy.get("#dificultad-kata-editar").select("Facil");
        cy.get("#descripcion-kata-editar").clear().type("Nueva descripcion");
        cy.get("input[type='submit']").eq(3).click();
        cy.get(".title-kata").eq(0).should("contain", "NuevoTitulo");
    });

    it("deberia devolver la kata que quiero editar tras aplicar un filtro", () => {
        cy.get("#filtrar-dificultad-kata").select("Intermedia");
        cy.get('.boton-editar').eq(0).click();
        cy.get("#titulo-kata-editar").should("have.value", "Kata");
        cy.get("#categoria-kata-editar").should("have.value", "Validacion y formularios");
        cy.get("#dificultad-kata-editar").should("have.value", "Intermedia");
        cy.get("#descripcion-kata-editar").should("have.value", "Descripcion vacia");
    });
});