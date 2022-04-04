describe("Failed to search an organization", () => {
  it("Enter the landing page and search for an organization that does not exist", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1280, 800);

    cy.get("input[id=searchOrgInput]").type("organization that does not exist");
    cy.get("button[id=searchOrgButton]").click();

    cy.contains("Organization not found!");
  });
});

describe("Seach an organization", () => {
  it("Enters the landing page and search for an organization", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1280, 800);

    cy.get("input[id=searchOrgInput]").type("facebook");
    cy.get("button[id=searchOrgButton]").click();

    cy.contains("Repositories");
  });
});

export {};
