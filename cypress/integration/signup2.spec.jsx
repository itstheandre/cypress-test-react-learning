/// <reference types="cypress" />

describe("page", () => {
  it("goes to signup", () => {
    cy.server();
    cy.route({
      method: "POST",
      url: "**/api/signup",
      status: 201,
      response: {},
    }).as("signup");
    cy.visit("/");
    cy.get(".signupPage").click();
    cy.url().should("include", "signup");

    cy.get(".username").type("André");
    cy.get("input[type='password']").type("password");
    cy.get("button[type='submit']").click();
    cy.wait("@signup").its("requestBody").should("deep.equal", {
      username: "André",
      password: "password",
    });

    cy.get(".message").should("contain.text", "Redirecting");
    cy.url().should("not.contain", "signup");
  });
});
