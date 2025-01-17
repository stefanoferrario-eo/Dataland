import { describeIf } from "@e2e/support/TestUtility";
import { type FixtureData } from "@sharedUtils/Fixtures";
import { DataTypeEnum, type LksgData } from "@clients/backend";
import { getKeycloakToken } from "@e2e/utils/Auth";
import { admin_name, admin_pw } from "@e2e/utils/Cypress";
import { uploadCompanyAndFrameworkData } from "@e2e/utils/FrameworkUpload";
import { generateCompanyInformation } from "@e2e/fixtures/CompanyFixtures";

describeIf(
  "Validation for correct display of 'Rejected' badge",
  {
    executionEnvironments: ["developmentLocal", "ci"],
  },
  () => {
    beforeEach(() => {
      cy.ensureLoggedIn(admin_name, admin_pw);
    });

    let lksgFixture: FixtureData<LksgData>;

    before(function () {
      cy.fixture("CompanyInformationWithLksgData").then(function (jsonContent: Array<FixtureData<LksgData>>) {
        lksgFixture = jsonContent[0];
      });
    });

    it("Verifies that the badge is shown as expected when an uploaded Lksg dataset gets rejected", () => {
      cy.intercept("/api/data/lksg*", { middleware: true }, (req) => {
        req.headers["REQUIRE-QA"] = "true";
      });
      getKeycloakToken(admin_name, admin_pw).then((token: string) => {
        return uploadCompanyAndFrameworkData(
          DataTypeEnum.Lksg,
          token,
          generateCompanyInformation(),
          lksgFixture.t,
          lksgFixture.reportingPeriod,
        ).then((uploadIds) => {
          cy.intercept("**/qa/datasets").as("getDataIdsOfReviewableDatasets");
          cy.intercept(`**/api/metadata/${uploadIds.dataId}`).as("getDataMetaInfoOfPostedDataset");
          cy.visit(`/qualityassurance`);
          cy.wait("@getDataIdsOfReviewableDatasets");
          cy.wait("@getDataMetaInfoOfPostedDataset");
          cy.intercept(`**/api/data/lksg/${uploadIds.dataId}`).as("getPostedDataset");
          cy.contains(`${uploadIds.dataId}`).click();
          cy.wait("@getPostedDataset");
          cy.get('[data-test="qaRejectButton"').click();
          cy.intercept("**/api/companies*").as("getMyDatasets");
          cy.visit(`/datasets`);
          cy.wait("@getMyDatasets");
          cy.get(`a[href="/companies/${uploadIds.companyId}/frameworks/lksg/${uploadIds.dataId}"]`)
            .parents("tr[role=row]")
            .find("td[role=cell]")
            .find("div[class='p-badge badge-red']")
            .should("exist")
            .should("contain", "REJECTED");
        });
      });
    });
  },
);
