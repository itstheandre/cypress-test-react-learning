/// <reference types="cypress" />

import { createRouter } from "next/router";
import { RouterContext } from "next/dist/next-server/lib/router-context";

import { mount } from "cypress-react-unit-test";
import Signup from "../../pages/signup";

describe("<Signup /> Page", () => {
  it("Makes call", () => {
    const router = createRouter(
      "/testPath",
      { param1: "param1" },
      "/asTestPath",
      {
        subscription: cy.stub(),
        initialProps: {},
        App: cy.stub(),
        Component: cy.stub(),
        pageLoader: cy.stub(),
        initialStyleSheets: [],
        wrapApp: cy.stub(),
        isFallback: false,
        push: cy.stub(),
      }
    );
    mount(
      <RouterContext.Provider value={router}>
        <Signup />
      </RouterContext.Provider>
    );
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
