describe("Pagination of an organization's repositories", () => {
  it("Enters the landing page, search for an organization and switches to page two", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1280, 800);

    cy.get("input[id=searchOrgInput]").type("facebook");
    cy.get("button[id=searchOrgButton]").click();

    cy.get("button[id=nextPage]").click();
  });
});

export {};
