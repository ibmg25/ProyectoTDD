
describe("Mostrar lista de katas", () => {
  it("deberia mostrar una lista con varias katas", () => {
    cy.visit("/ruta-de-tu-pagina"); // Ajusta la ruta según la estructura de tu aplicación

    cy.get("#resultado-div")
      .find(".kata")   // Busca elementos con la clase .kata dentro del div
      .should("have.length.greaterThan", 0); // Asegura que haya al menos un elemento .kata dentro del div
  });
});


