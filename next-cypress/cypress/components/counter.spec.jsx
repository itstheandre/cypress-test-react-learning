/// <reference types="cypress" />

import { mount } from "cypress-react-unit-test";
import Counter from "../../components/counter";

describe("<Counter />", () => {
  it("increases", () => {
    mount(<Counter />);

    cy.get(".val").should("have.text", "0");
    cy.get(".increase").click();
    cy.get(".val").should("have.text", "1");
    cy.get(".decrease").click();
    cy.get(".val").should("have.text", "0");
  });
});
