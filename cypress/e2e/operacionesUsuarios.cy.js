//import GestionUsuarios from "../../src/gestionUsuarios";
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

    it("deberia volver al Login luego de registrarse", () => {
      cy.visit("/");
      cy.get('#boton-registro').click();
      cy.get("#registrarse-form").should("be.visible");
      cy.get("#username-registro").type("user");
      cy.get("#rol-registro").select("Estudiante");
      cy.get("#password-registro").type("123");
      cy.get("input[type='submit']").eq(4).click();
      cy.get("#registrarse-form").should("not.be.visible");
      cy.get("#divBienvenida").should("be.visible");
    });
    it("deberia registrarse e iniciar sesion en el login", () => {
      cy.visit("/");
      cy.get('#boton-registro').click();
      cy.get("#registrarse-form").should("be.visible");
      cy.get("#username-registro").type("user");
      cy.get("#password-registro").type("123");
      cy.get("input[type='submit']").eq(4).click();
      cy.get("#registrarse-form").should("not.be.visible");
      cy.get("#divBienvenida").should("be.visible");
      cy.get("#loginUsername").type("user");
      cy.get("#loginPassword").type("123");
      cy.get("#boton-Inicio").click();
      cy.get("#divBienvenida").should("not.be.visible");



    });

});

beforeEach(() => {
  cy.visit("/");
  cy.get('#boton-registro').click();
  cy.get("#registrarse-form").should("be.visible");
  cy.get("#username-registro").type("user");
  cy.get("#password-registro").type("123");
  cy.get("input[type='submit']").eq(4).click();
});


describe("Editar datos del usuario", () => {
  it("deberia devolverme los datos actuales del usuario que quiero editar", () => {
    cy.get('#boton-mi-perfil').click();
    cy.get("#username-registro").should("have.value", "usuario");
    cy.get("#password-registro").should("have.value", "123");
  });

});