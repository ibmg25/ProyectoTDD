
describe("Mostrar lista de katas", () => {
  
  it("deberia mostrar una lista con varias katas", () => {
    cy.visit("/"); // Ajusta la ruta según la estructura de tu aplicación

    cy.get("#resultado-div")
      .find(".kata")   // Busca elementos con la clase .kata dentro del div
      .should("have.length.greaterThan", 0); // Asegura que haya al menos un elemento .kata dentro del div
  });

  it("deberia mostrar la kata buscada por nombre", () => {
    cy.visit("/"); // Ajusta la ruta según la estructura de tu aplicación

    //cy.get("#resultado-div")
    cy.get("#titulo").type("Kata 2");
    cy.get("#buscar-button").click() // Busca elementos con la clase .kata dentro del div
    cy.should("have.length",1 ); // Asegura que haya al menos un elemento .kata dentro del div
  });

  it("deberia mostrar la kata buscada por dificultad", () => {
    cy.visit("/"); // Ajusta la ruta según la estructura de tu aplicación

    cy.get("#resultado-div")
    cy.get("#filtrar-dificultad-kata").select("Facil");
    cy.get("#buscar-button").click() // Busca elementos con la clase .kata dentro del div
    cy.should("have.length",1 ); // Asegura que haya al menos un elemento .kata dentro del div
  });
});


describe("Filtrar por categorias", () => {
  it("deberia mostrar una lista vacía si no hay katas de una categoría", () => {
    cy.visit("http://localhost:1234");
    cy.get("#filtrar-categoria-kata").select("Sin asignar");
    cy.get("#resultado-div").should("be.empty");
  });
  it("deberia mostrar una lista con katas de una categoría", () => {
    cy.visit("http://localhost:1234");
    cy.get("#filtrar-categoria-kata").select("Lógica y matematicas");
    cy.get("#resultado-div").should("not.be.empty");
  });
  it("deberia mostrar una lista con katas de otra categoría", () => {
    cy.visit("http://localhost:1234");
    cy.get("#filtrar-categoria-kata").select("Validacion y formularios");
    cy.get("#resultado-div").should("not.be.empty");
  });
});
