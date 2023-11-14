//pruebas automatizadas para filtrar por categorias
//debería mostrar una lista vacía si no hay katas de una categoría
//debería mostrar una lista con katas de una categoría
//debería mostrar una lista con katas de otra categoría

describe("Filtrar por categorias", () => {
  it("deberia mostrar una lista vacía si no hay katas de una categoría", () => {
    cy.visit("http://localhost:1234");
    cy.get("#filtrar-categoria-kata").select("Validacion y formularios");
    cy.get("#resultado-div").should("be.empty");
  });
  it("deberia mostrar una lista con katas de una categoría", () => {
    cy.visit("http://localhost:1234");
    cy.get("#filtrar-categoria-kata").select("Lógica y matematicas");
    cy.get("#resultado-div").should("not.be.empty");
  });
});