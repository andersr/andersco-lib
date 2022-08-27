import { Button } from "./Button";
import { mount } from "cypress/react18";

describe("ComponentName.cy.ts", () => {
  it("displays the button label", () => {
    const label = "TEST";
    mount(<Button>{label}</Button>);

    cy.get("button").should("have.text", label);
  });
});
