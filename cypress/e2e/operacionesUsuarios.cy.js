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
    

    

});