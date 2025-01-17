import { type CompanyAssociatedDataLksgData } from "@clients/backend";
import { submitButton } from "@sharedUtils/components/SubmitButton";
import { uploadDocuments } from "@sharedUtils/components/UploadDocuments";
import { assertDefined } from "@/utils/TypeScriptUtils";

/**
 * Fills in dummy data for a single production site. Use this in a cy.within context of a production site container div
 */
function fillSingleProductionSite(): void {
  cy.get('input[name="nameOfProductionSite"]').type("CCddEE");
  cy.get('input[name="streetAndHouseNumber"]').type("Live-street 28");
  cy.get('select[name="country"]').select("Belgium (BE)");
  cy.get('input[name="city"]').type("Capitol City");
  cy.get('input[name="postalCode"]').type("WE-3133");
  cy.get('input[data-test="listOfGoodsOrServices"]').type("1,2,3");
  cy.get('button[aria-label="Add"]').click();
  cy.get("span.form-list-item").its("length").should("eq", 3);
}

/**
 * Clicking "Yes" Everywhere using cypress commands results in an out-of-memory error in electron
 * Therefore, we use native browser commands to consolidate all actions into a few cypress action
 * This action needs to be recursive as clicking yes on some fields will result in other fields getting visible
 * @param maxCounter the maximum recursion depth before an error is thrown
 */
function recursivelySelectYesOnAllFields(maxCounter: number): void {
  if (maxCounter <= 0) {
    throw new Error("Recursion depth exceeded selecting yes on all input fields");
  }

  cy.window().then((win) => {
    if (selectYesOnAllFieldsBrowser(win)) {
      cy.wait(250).then(() => recursivelySelectYesOnAllFields(maxCounter - 1));
    }
  });
}

/**
 * Uses the native browser window to select yes on all checkbox fields
 * @param win the native browser window to use
 * @returns whether a new checkbox has been checked
 */
function selectYesOnAllFieldsBrowser(win: Window): boolean {
  let changedAnything = false;
  win.document.querySelectorAll<HTMLInputElement>('input[type="radio"][value="Yes"]').forEach((element) => {
    const elementSelected = win.getComputedStyle(element, ":before").getPropertyValue("display") != "none";

    if (!elementSelected) {
      element.click();
      changedAnything = true;
    }
  });
  return changedAnything;
}

/**
 * Given the data-test selector for a NACE form field,
 * this function will select the "A" code in that field
 * @param fieldName the identifier of the form field
 */
function selectANaceCode(fieldName: string): void {
  cy.get(`div[data-test='${fieldName}'] input`).click();

  cy.get(".p-treenode-label")
    .contains("A - AGRICULTURE, FORESTRY AND FISHING")
    .parents(".p-treenode-label")
    .last()
    .find("div.p-checkbox-box")
    .click();

  cy.get(`div[data-test='${fieldName}']`).click();
}

/**
 * Given the data-test selector for a Multi-Select Country-Code form field,
 * this function will select a single country
 * @param fieldName the identifier of the form field
 */
function selectACountryInMultiselect(fieldName: string): void {
  cy.get(`div[data-test='${fieldName}'] div.p-multiselect`).click();

  cy.get(".p-multiselect-item").contains("Afghanistan (AF)").siblings(".p-checkbox").last().click();
  cy.get(`div[data-test='${fieldName}']`).click();
}

/**
 * Selects a dummy date in the LKsG upload form date picker.
 */
function selectDummyDateInDataPicker(): void {
  cy.get('[data-test="dataDate"]').find("button.p-datepicker-trigger").click();
  cy.get("div.p-datepicker").find('button[aria-label="Previous Month"]').click();
  cy.get("div.p-datepicker").find('span:contains("13")').click();
  cy.get('input[name="dataDate"]').should(($input) => {
    const val = $input.val();
    expect(val).to.include("-13");
  });
}

/**
 * Tests if it is possible to add and remove production sites and fills out the details for one production sites
 */
function testProductionSiteAdditionAndRemovalAndFillOutOneProductionSite(): void {
  cy.get('div[data-test="productionSiteSection"]').should("be.visible");
  cy.get('button[data-test="addNewProductionSiteButton"]').should("be.visible").click();
  cy.get('div[data-test="productionSiteSection"]').should("have.length", 2);
  cy.get('[data-test="removeItemFromListOfProductionSites"]').eq(1).click();
  cy.get('div[data-test="productionSiteSection"]').should("have.length", 1);

  cy.get('div[data-test="productionSiteSection"]').within(() => fillSingleProductionSite());
}

/**
 * Fills out all required LKsG fields that are NOT Yes/No/(Na) fields
 */
function fillRequiredLksgFieldsWithDummyData(): void {
  selectACountryInMultiselect("subcontractingCompaniesCountries");
  selectACountryInMultiselect("highRiskCountries");
  selectACountryInMultiselect("highRiskCountriesRawMaterialsLocation");

  selectANaceCode("industry");
  selectANaceCode("subcontractingCompaniesIndustries");

  cy.get('div[data-test="shareOfTemporaryWorkers"]').find('input[value="Smaller10"]').click().should("be.checked");
  cy.get('div[data-test="market"]').find('input[value="International"]').click().should("be.checked");

  cy.get("input[name=humanRightsViolationActionMeasures]").type("Dummy answer");
  cy.get("input[name=humanRightsViolations]").type("Dummy answer");
  cy.get("input[name=numberOfEmployees]").type("7999");
  cy.get("input[name=annualTotalRevenue]").type("10043000");
  cy.get("input[name=groupOfCompaniesName]").type("TestCompanyGroup");
  cy.get("input[name=capacity]").type("123");

  cy.get("select[name=totalRevenueCurrency]").select("EUR");
}

/**
 * Adds a new product and fills its form
 * @param name of the product to fill in
 * @param productionSteps the production steps to fill in
 * @param description the description to fill in
 */
function fillNewProduct(name: string, productionSteps: string[], description?: string): void {
  cy.get('button[data-test="addNewProductButton"]').click();
  const productFormElementSelector = '[data-test="productSection"] [data-test="productFormElement"]';
  cy.get(productFormElementSelector).last().find('input[name="name"]').type(name);
  if (productionSteps.length > 0 && productionSteps.some((productionStep) => productionStep.length > 0)) {
    cy.get(productFormElementSelector)
      .last()
      .find('input[data-test="listOfElementsInput"]')
      .type(productionSteps.join(", "));
    cy.get(productFormElementSelector).last().find('[data-test="addProductionStep"]').click();
  }
  if (description) {
    cy.get(productFormElementSelector).last().find('textarea[name="relatedCorporateSupplyChain"]').type(description);
  }
}

/**
 * Adds some products to the most important products form
 */
function fillInMostImportantProducts(): void {
  fillNewProduct("Test Product 1", ["first", "second"], "Description of something");
  fillNewProduct("Test Product 2", []);
}

/**
 * Fills out Procurement Categories
 */
function fillInProcurementCategories(): void {
  cy.get('[data-test="dataPointToggleButton"]').first().click();
  cy.get('[data-test="suppliersPerCountryCode"] .p-multiselect').should("exist").click();

  const selectedCountries: string[] = [];

  cy.get(".p-multiselect-panel ul.p-multiselect-items li.p-multiselect-item")
    .should("exist")
    .each(($item, index) => {
      if (index < 2) {
        const countryName = $item[0].innerText.split(" ").slice(0, -1).join(" ");
        cy.wrap($item).click();
        selectedCountries.push(countryName);
      }
    });

  cy.get('[data-test="directSuppliersHeader"]').should("exist").should("contain", "Number of Direct Suppliers");

  cy.get('[data-test="supplierCountry"]')
    .should("have.length", 2)
    .each(($el, index) => {
      cy.wrap($el).find("h5").should("contain.text", selectedCountries[index]);
      cy.wrap($el).find('[data-test="supplierCountryValue"]').should("exist").type("2", { force: true });
    });
}

/**
 * Test if the showIf-functionality works by using one example from the LKSG Framework.
 */
function checkIfUploadFieldDependenciesAreRespected(): void {
  cy.get("input[name=capacity]").should("not.exist");
  cy.get("input[id=manufacturingCompany-option-yes]").click();
  cy.get("input[name=capacity]").should("be.visible").type("5000");
  cy.get("input[id=manufacturingCompany-option-no]").click();
  cy.get("input[name=capacity]").should("not.exist");
}

/**
 *  Verify that selected documents are referenced in the actual dataset
 */
function checkIfUploadedFilesAreReferencedInTheDataset(): void {
  cy.intercept("POST", "**/api/data/lksg").as("postLksgData");
  submitButton.clickButton();
  cy.wait("@postLksgData").then((interception) => {
    const postedObject = interception.request.body as CompanyAssociatedDataLksgData;
    const postedLksgDataset = postedObject.data;
    const referencedReportHash =
      assertDefined(postedLksgDataset).governance!.certificationsPoliciesAndResponsibilities!.sa8000Certification!
        .dataSource!.reference;
    expect(referencedReportHash).to.be.not.empty;
  });
}

/**
 * Uploads a single LKSG data entry for a company via form
 */
export function uploadLksgDataViaForm(): void {
  Cypress.Keyboard.defaults({
    keystrokeDelay: 0,
  });

  submitButton.buttonIsAddDataButton();
  submitButton.buttonAppearsDisabled();
  selectDummyDateInDataPicker();

  checkIfUploadFieldDependenciesAreRespected();

  recursivelySelectYesOnAllFields(15);
  fillInMostImportantProducts();
  fillInProcurementCategories();

  uploadDocuments.selectDocumentAtEachFileSelector("test-report");

  submitButton.buttonAppearsDisabled();
  fillRequiredLksgFieldsWithDummyData();

  testProductionSiteAdditionAndRemovalAndFillOutOneProductionSite();
  checkIfUploadedFilesAreReferencedInTheDataset();

  cy.get("div.p-message-success").should("be.visible");
}

/**
 * Scrolls to the top and bottom of the LKSG input form and checks if the sidebar correctly switches from sticky to non-sticky while doing so.
 */
export function checkStickynessOfSubmitSideBar(): void {
  cy.scrollTo("bottom");
  cy.get("[data-test='submitSideBar']").should("have.css", "position", "fixed").and("have.css", "top", "60px");
  cy.scrollTo("top");
  cy.get("[data-test='submitSideBar']").should("have.css", "position", "relative").and("have.css", "top", "0px");
}
