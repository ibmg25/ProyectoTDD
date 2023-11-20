import GestionUsuarios from "../../src/gestionUsuarios";
import Usuario from "../../src/usuario";

describe("Registrarse con usuario y contrasenia", () => {
    it("deberia mostrarme un mensaje de bienvenida y un boton para registrarme apenas ingreso a la pagina", () => {
      cy.visit("/");
      cy.get("#banner").should("contain", "¡Bienvenido a DevTestCoach!");
      cy.get("#boton-registro").should("be.visible");
    });

});