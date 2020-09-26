/// <reference types="cypress" />
import Signup from "../../pages/signup";
describe("<Signup /> Page", () => {
  it("Makes call", () => {
    cy.visit("http://localhost:3000");
    cy.server();
    cy.route({
      method: "POST",
      url: "**/api/signup",
      status: 201,
      response: {},
    }).as("signup");

    cy.get(".username").type("André");
    cy.get("input[type='password']").type("password");
    cy.get("button[type='submit']").click();
    cy.wait("@signup").its("requestBody").should("deep.equal", {
      username: "André",
      password: "password",
    });
  });
});
