import { CopyRight } from "./Copyright";
import { mount } from "cypress/react18";

describe("CopyRight", () => {
  it("display a copyright message with the included org name", () => {
    const orgName = "Org Name";
    const year = new Date().getFullYear();
    mount(<CopyRight>{orgName}</CopyRight>);

    cy.get("span").should("have.text", `© ${year} ${orgName}`);
  });
});
