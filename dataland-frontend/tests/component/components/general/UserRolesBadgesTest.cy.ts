import UserRolesBadges from "@/components/general/apiKey/UserRolesBadges.vue";
import { mount } from "cypress/vue";

describe("Component test for UserRolesBadges", () => {
  it("Should display the user roles for an uploader (READ/WRITE)", () => {
    mount(UserRolesBadges, {
      props: {
        userRoles: ["ROLE_USER", "ROLE_UPLOADER"],
      },
    });
    cy.get("[data-test=userRoleUser]").should("have.text", "READ");
    cy.get("[data-test=userRoleUploader]").should("have.text", "WRITE");
    cy.get("[data-test=userRoleAdmin]").should("not.exist");
    cy.get("[data-test=userRoleReviewer]").should("not.exist");
  });

  it("Should display the user roles for a user (READ)", () => {
    mount(UserRolesBadges, {
      props: {
        userRoles: ["ROLE_USER"],
      },
    });
    cy.get("[data-test=userRoleUser]").should("have.text", "READ");
    cy.get("[data-test=userRoleUploader]").should("not.exist");
    cy.get("[data-test=userRoleAdmin]").should("not.exist");
    cy.get("[data-test=userRoleReviewer]").should("not.exist");
  });

  it("Should display the user roles for an admin (READ/WRITE/ADMIN/ROLE_REVIEWER)", () => {
    mount(UserRolesBadges, {
      props: {
        userRoles: ["ROLE_USER", "ROLE_UPLOADER", "ROLE_ADMIN", "ROLE_REVIEWER"],
      },
    });
    cy.get("[data-test=userRoleUser]").should("have.text", "READ");
    cy.get("[data-test=userRoleUploader]").should("have.text", "WRITE");
    cy.get("[data-test=userRoleAdmin]").should("have.text", "ADMIN");
    cy.get("[data-test=userRoleReviewer]").should("have.text", "REVIEWER");
  });
});