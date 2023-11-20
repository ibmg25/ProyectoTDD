import GestionUsuarios from "../../src/gestionUsuarios";
import Usuario from "../../src/usuario";

describe("Registrarse con usuario y contrasenia", () => {
    it("deberia mostrarme un mensaje de bienvenida y un boton para registrarme apenas ingreso a la pagina", () => {
      cy.visit("/");
      cy.get("#banner").should("contain", "¡Bienvenido a DevTestCoach!");
      cy.get("#boton-registro").should("be.visible");
    });

    it("deberia mostrar un formulario de registro al hacer clic en registrar", () => {
      cy.visit("/");
      cy.get('#boton-registro').click();
      cy.get("#registrarse-form").should("be.visible");
    });

    it("deberia mostrarme un mensaje de bienvenida y desplegar el catalogo", () => {
      cy.visit("/");
      cy.get('#boton-registro').click();
      cy.get("#registrarse-form").should("be.visible");
      cy.get("#username-registro").type("user");
      cy.get("#password-registro").type("123");
      cy.get("input[type='submit']").eq(4).click();
      cy.get("#mensaje2-div").should("contain", "¡Bienvenido user! Tu registro se ha completado con éxito.");
      cy.get("#registrarse-form").should("not.be.visible");
      cy.get("#divCatalogo").should("be.visible");
    });

});