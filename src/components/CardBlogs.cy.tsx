import React from "react";
import CardBlogs from "./CardBlogs";

describe("<CardBlogs />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <CardBlogs
        title="Duck is so much cute"
        author="Thraver Cetewind"
        email="cetewindt@gmail.com"
        img=""
        img_profile=""
        detail=""
      />
    );
    cy.get('[data-cy="blog-title"]')
      .should("exist")
      .and("be.visible")
      .contains("Duck is so much cute");
  });
});
