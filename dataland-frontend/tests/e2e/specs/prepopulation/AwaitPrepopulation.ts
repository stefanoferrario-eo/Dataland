import { retrieveCompanyIdsList } from "../../utils/ApiUtils";

describe("I want to ensure that the prepopulation has finished before executing any further tests", () => {
  let minimumCompanySum = 0;
  before(function () {
    cy.fixture("CompanyInformationWithEuTaxonomyDataForNonFinancials").then(function (companies) {
      minimumCompanySum += companies.length;
    });
    cy.fixture("CompanyInformationWithEuTaxonomyDataForFinancials").then(function (companies) {
      minimumCompanySum += companies.length;
    });
  });

  it(
    "Should wait until prepopulation has finished",
    {
      retries: {
        runMode: 250,
        openMode: 250,
      },
    },
    () => {
      cy.wait(5000)
        .then(() => retrieveCompanyIdsList())
        .then((ids) => {
          if (ids.length < minimumCompanySum) {
            throw Error(`Only found ${ids.length} companies (Expecting ${minimumCompanySum})`);
          }
        });
    }
  );
});