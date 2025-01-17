import WelcomeDataland from "@/components/pages/WelcomeDataland.vue";
import { checkButton, checkImage } from "@ct/testUtils/ExistenceChecks";
import { checkFooter } from "@sharedUtils/ElementChecks";
import { minimalKeycloakMock } from "@ct/testUtils/Keycloak";

describe("Component test for WelcomeDataland", () => {
  it("Check if essential elements are present", () => {
    cy.mountWithPlugins(WelcomeDataland, {
      keycloak: minimalKeycloakMock({}),
    }).then((mounted) => {
      void mounted.wrapper.setProps({
        isMobile: false,
      });
    });
    cy.get('[data-test="banner message"]').should("contain.text", "THE ALTERNATIVE TO DATA MONOPOLIES");
    checkImage("Dataland image logo", "bg_graphic_vision.svg");
    checkImage("Dataland banner logo", "logo_dataland_long.svg");
    checkImage("pwc", "pwc.svg");
    checkImage("d-fine GmbH", "dfine.svg");
    checkButton("join_dataland_button", "Create a preview account");
    checkButton("preview_button", "Preview data");
    checkButton("login_dataland_button", "Login to preview account");
    checkFooter();
  });
});
