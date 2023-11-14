//pruebas automatizadas para filtrar por categorias
//debería mostrar una lista vacía si no hay katas de una categoría
//debería mostrar una lista con katas de una categoría
//debería mostrar una lista con katas de otra categoría

describe("deberia seleccionar la categoria de Validacion y formularios y no mostrar nada ya que no hay ninguna kata de esa categoria", () => {
  it("deberia mostrar una lista vacía si no hay katas de una categoría", () => {
    cy.visit("http://localhost:1234");
    cy.get("#filtrar-categoria-kata").select("Validacion y formularios");
    cy.get("#resultado-div").should("be.empty");
  });
}
);