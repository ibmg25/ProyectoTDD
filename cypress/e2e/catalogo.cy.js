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

describe("Mostrar lista de katas", () => {
  

  it("deberia mostrar una lista con varias katas", () => {
    cy.get("#lista-katas-div")
      .find(".kata")   // Busca elementos con la clase .kata dentro del div
      .should("have.length.greaterThan", 0); // Asegura que haya al menos un elemento .kata dentro del div
  });

  it("deberia mostrar la kata buscada por nombre", () => {

    //cy.get("#resultado-div")
    cy.get("#titulo").type("Kata 2");
    cy.get("#buscar-button").click() // Busca elementos con la clase .kata dentro del div
    cy.should("have.length",1 ); // Asegura que haya al menos un elemento .kata dentro del div
  });

  it("deberia mostrar la kata buscada por dificultad", () => {
 
    cy.get("#lista-katas-div")
    cy.get("#filtrar-dificultad-kata").select("Facil");
    cy.get("#buscar-button").click() // Busca elementos con la clase .kata dentro del div
    cy.should("have.length",1 ); // Asegura que haya al menos un elemento .kata dentro del div
  });
});


describe("Filtrar por categorias", () => {
  it("deberia mostrar una lista vacía si no hay katas de una categoría", () => {

    cy.get("#filtrar-categoria-kata").select("Sin Asignar");
    cy.get("#lista-katas-div").should("be.empty");
  });
  it("deberia mostrar una lista con katas de una categoría", () => {

    cy.get("#filtrar-categoria-kata").select("Lógica y matematicas");
    cy.get("#lista-katas-div").should("not.be.empty");
  });
  it("deberia mostrar una lista con katas de otra categoría", () => {

    cy.get("#filtrar-categoria-kata").select("Validacion y formularios");
    cy.get("#lista-katas-div").should("not.be.empty");
  });
});

describe("Mostrar lista de katas", () => {
  
  it("deberia eliminar la kata seleccionada", () => {

    cy.get("#lista-katas-div").should("contain", 'Kata 4')

    cy.get(".boton-eliminar").eq(3).click();

    cy.get("#lista-katas-div").should("not.contain", 'Kata 4')

  });

  it("deberia eliminar varias katas seleccionadas", () => {

    cy.get("#lista-katas-div").should("contain", 'Kata 2')
    cy.get(".boton-eliminar").eq(1).click();
    cy.get("#lista-katas-div").should("not.contain", 'Kata 2')

    cy.get("#lista-katas-div").should("contain", 'Kata 3')
    cy.get(".boton-eliminar").eq(1).click();
    cy.get("#lista-katas-div").should("not.contain", 'Kata 3')

  });
});