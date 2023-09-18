import { faker } from "@faker-js/faker";
import {
  type LksgData,
  type LksgProcurementCategory,
  type LksgProduct,
  type LksgProductionSite,
  NationalOrInternationalMarket,
  ShareOfTemporaryWorkers,
} from "@clients/backend";
import { randomYesNo, randomYesNoNa } from "@e2e/fixtures/common/YesNoFixtures";
import { generateIso4217CurrencyCode } from "@e2e/fixtures/common/CurrencyFixtures";
import { valueOrUndefined } from "@e2e/utils/FakeFixtureUtils";
import { getRandomReportingPeriod } from "@e2e/fixtures/common/ReportingPeriodFixtures";
import { generateArray, generateFixtureDataset } from "@e2e/fixtures/FixtureUtils";
import { type FixtureData } from "@sharedUtils/Fixtures";
import { randomFloat, randomInt, randomPercentageValue } from "@e2e/fixtures/common/NumberFixtures";
import { getRandomIso2CountryCode } from "@e2e/fixtures/common/CountryFixtures";
import { randomFutureDate } from "@e2e/fixtures/common/DateFixtures";
import { generateBaseDataPoint } from "@e2e/fixtures/common/BaseDataPointFixtures";
import { ProcurementCategoryType } from "@/api-models/ProcurementCategoryType";
import { valueOrNull } from "@e2e/fixtures/common/DataPointFixtures";
import { generateListOfRandomNaceCodes } from "@e2e/fixtures/common/NaceCodeFixtures";
import { generateAddress } from "@e2e/fixtures/common/AddressFixtures";

/**
 * Generates a set number of LKSG fixtures
 * @param numFixtures the number of lksg fixtures to generate
 * @param undefinedProbability the probability of fields to be undefined (number between 0 and 1)
 * @returns a set number of LKSG fixtures
 */
export function generateLksgFixture(numFixtures: number, undefinedProbability = 0.5): FixtureData<LksgData>[] {
  return generateFixtureDataset<LksgData>(
    () => generateLksgData(undefinedProbability),
    numFixtures,
    (dataSet) => dataSet?.general?.masterData?.dataDate?.substring(0, 4) || getRandomReportingPeriod(),
  );
}

/**
 * Generates a Lksg fixture with a dataset with many null values for categories, subcategories and field values
 * @returns the fixture
 */
export function generateOneLksgFixtureWithManyNulls(): FixtureData<LksgData> {
  return generateFixtureDataset<LksgData>(
    () => generateOneLksgDatasetWithManyNulls(),
    1,
    (dataSet) => dataSet?.general?.masterData?.dataDate?.substring(0, 4) || getRandomReportingPeriod(),
  )[0];
}

/**
 * Generates a random production site
 * @param undefinedProbability the percentage of undefined values in the returned production site
 * @returns a random production site
 */
export function generateProductionSite(undefinedProbability = 0.5): LksgProductionSite {
  return {
    nameOfProductionSite: valueOrUndefined(faker.company.name(), undefinedProbability),
    addressOfProductionSite: generateAddress(undefinedProbability),
    listOfGoodsOrServices: valueOrUndefined(generateListOfGoodsOrServices(), undefinedProbability),
  };
}

/**
 * Generates a random product
 * @returns a random product
 */
function generateProduct(): LksgProduct {
  return {
    name: faker.commerce.productName(),
    productionSteps: valueOrUndefined(generateArray(() => `${faker.word.verb()} ${faker.commerce.productMaterial()}`)),
    relatedCorporateSupplyChain: valueOrUndefined(faker.lorem.sentences()),
  };
}

/**
 * Generates a random procurement category
 * @returns random procurement category
 */
function generateProcurementCategory(): LksgProcurementCategory {
  const numberOfSuppliersPerCountryCodeAsMap = new Map<string, number>(
    generateArray(() => [getRandomIso2CountryCode(), valueOrNull(faker.number.int({ min: 0, max: 50 }))!]),
  );
  return {
    procuredProductTypesAndServicesNaceCodes: generateListOfRandomNaceCodes(),
    numberOfSuppliersPerCountryCode: valueOrUndefined(Object.fromEntries(numberOfSuppliersPerCountryCodeAsMap)),
    percentageOfTotalProcurement: valueOrUndefined(randomPercentageValue()),
  };
}

/**
 * Generates a random map of procurement categories
 * @returns random map of procurement categories
 */
function generateProcurementCategories(): { [key: string]: LksgProcurementCategory } {
  const procurementCategories = Object.values(ProcurementCategoryType);
  const keys = [] as ProcurementCategoryType[];
  procurementCategories.forEach((category) => {
    if (faker.datatype.boolean()) {
      keys.push(category);
    }
  });
  return Object.fromEntries(
    new Map<string, LksgProcurementCategory>(
      keys.map((procurementCategoryType) => [procurementCategoryType as string, generateProcurementCategory()]),
    ),
  );
}

/**
 * Generates a random array of goods or services
 * @returns random array of goods or services
 */
export function generateListOfGoodsOrServices(): string[] {
  return generateArray(() => faker.commerce.productName(), 1);
}

/**
 * Randomly returns <10%, 10-25%, 25-50% or >50%
 * @returns one of the four percentage intervals as string
 */
export function randomShareOfTemporaryWorkersInterval(): ShareOfTemporaryWorkers {
  return faker.helpers.arrayElement(Object.values(ShareOfTemporaryWorkers));
}

/**
 * Randomly returns National, International or Both
 * @returns one of the options as string
 */
export function randomNationalOrInternationalMarket(): NationalOrInternationalMarket {
  return faker.helpers.arrayElement(Object.values(NationalOrInternationalMarket));
}

/**
 * Generates an LKSG dataset with the value null for some categories, subcategories and field values.
 * Datasets that were uploaded via the Dataland API can look like this in production.
 * @returns the dataset
 */
export function generateOneLksgDatasetWithManyNulls(): LksgData {
  return {
    general: {
      masterData: {
        dataDate: "1999-12-24",
        headOfficeInGermany: null!,
        groupOfCompanies: null!,
        groupOfCompaniesName: null!,
        industry: null!,
        numberOfEmployees: null!,
        seasonalOrMigrantWorkers: null!,
        shareOfTemporaryWorkers: null!,
        totalRevenueCurrency: null!,
        annualTotalRevenue: null!,
        fixedAndWorkingCapital: null!,
      },
      productionSpecific: null!,
      productionSpecificOwnOperations: null!,
    },
    governance: null!,
    social: null!,
    environmental: null!,
  };
}

/**
 * Generates a random LKSG dataset
 * @param undefinedProbability the ratio of fields to be undefined (number between 0 and 1)
 * @returns a random LKSG dataset
 */
export function generateLksgData(undefinedProbability = 0.5): LksgData {
  return {
    general: {
      masterData: {
        dataDate: randomFutureDate(),
        headOfficeInGermany: valueOrUndefined(randomYesNo(), undefinedProbability),
        groupOfCompanies: valueOrUndefined(randomYesNo(), undefinedProbability),
        groupOfCompaniesName: valueOrUndefined(faker.company.name(), undefinedProbability),
        industry: valueOrUndefined(generateListOfRandomNaceCodes(), undefinedProbability),
        numberOfEmployees: valueOrUndefined(randomInt(10000), undefinedProbability),
        seasonalOrMigrantWorkers: valueOrUndefined(randomYesNo(), undefinedProbability),
        shareOfTemporaryWorkers: valueOrUndefined(randomShareOfTemporaryWorkersInterval(), undefinedProbability),
        annualTotalRevenue: valueOrUndefined(randomFloat(1000000, 10000000000, 1), undefinedProbability),
        totalRevenueCurrency: valueOrUndefined(generateIso4217CurrencyCode(), undefinedProbability),
        fixedAndWorkingCapital: valueOrUndefined(randomInt(10000), undefinedProbability),
      },
      productionSpecific: {
        manufacturingCompany: valueOrUndefined(randomYesNo(), undefinedProbability),
        capacity: valueOrUndefined(
          randomInt(25).toString() + " " + faker.commerce.product() + " per " + faker.date.weekday(),
          undefinedProbability,
        ),
        productionViaSubcontracting: valueOrUndefined(randomYesNo(), undefinedProbability),
        subcontractingCompaniesCountries: valueOrUndefined(
          generateArray(getRandomIso2CountryCode),
          undefinedProbability,
        ),
        subcontractingCompaniesIndustries: valueOrUndefined(generateListOfRandomNaceCodes(), undefinedProbability),
        productionSites: valueOrUndefined(randomYesNo(), undefinedProbability),
        listOfProductionSites: valueOrUndefined(
          generateArray(() => generateProductionSite(undefinedProbability)),
          undefinedProbability,
        ),
        market: valueOrUndefined(randomNationalOrInternationalMarket(), undefinedProbability),
        specificProcurement: valueOrUndefined(randomYesNo(), undefinedProbability),
      },
      productionSpecificOwnOperations: {
        mostImportantProducts: valueOrUndefined(generateArray(generateProduct), undefinedProbability),
        productsServicesCategoriesPurchased: valueOrUndefined(generateProcurementCategories(), undefinedProbability),
      },
    },
    governance: {
      riskManagementOwnOperations: {
        riskManagementSystem: valueOrUndefined(randomYesNo(), undefinedProbability),
        riskAnalysisInFiscalYear: valueOrUndefined(randomYesNo(), undefinedProbability),
        risksIdentified: valueOrUndefined(randomYesNo(), undefinedProbability),
        identifiedRisks: valueOrUndefined(faker.company.buzzNoun(), undefinedProbability),
        counteractingMeasures: valueOrUndefined(randomYesNo(), undefinedProbability),
        whichCounteractingMeasures: valueOrUndefined(faker.company.buzzNoun(), undefinedProbability),
        regulatedRiskManagementResponsibility: valueOrUndefined(randomYesNo(), undefinedProbability),
        environmentalManagementSystem: valueOrUndefined(randomYesNo(), undefinedProbability),
        environmentalManagementSystemInternationalCertification: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
        environmentalManagementSystemNationalCertification: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
      },
      grievanceMechanismOwnOperations: {
        grievanceHandlingMechanism: valueOrUndefined(randomYesNo(), undefinedProbability),
        grievanceHandlingReportingAccessible: valueOrUndefined(randomYesNo(), undefinedProbability),
        appropriateGrievanceHandlingInformation: valueOrUndefined(randomYesNo(), undefinedProbability),
        appropriateGrievanceHandlingSupport: valueOrUndefined(randomYesNo(), undefinedProbability),
        accessToExpertiseForGrievanceHandling: valueOrUndefined(randomYesNo(), undefinedProbability),
        grievanceComplaints: valueOrUndefined(randomYesNo(), undefinedProbability),
        complaintsNumber: valueOrUndefined(randomInt(10000), undefinedProbability),
        complaintsReason: valueOrUndefined(faker.company.buzzNoun(), undefinedProbability),
        actionsForComplaintsUndertaken: valueOrUndefined(randomYesNo(), undefinedProbability),
        whichActionsForComplaintsUndertaken: valueOrUndefined(faker.company.buzzNoun(), undefinedProbability),
        publicAccessToGrievanceHandling: valueOrUndefined(randomYesNo(), undefinedProbability),
        whistleblowerProtection: valueOrUndefined(randomYesNo(), undefinedProbability),
        dueDiligenceProcessForGrievanceHandling: valueOrUndefined(randomYesNo(), undefinedProbability),
      },
      certificationsPoliciesAndResponsibilities: {
        sa8000Certification: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
        smetaSocialAuditConcept: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
        betterWorkProgramCertificate: valueOrUndefined(
          generateBaseDataPoint(randomYesNoNa(), undefinedProbability),
          undefinedProbability,
        ),
        iso45001Certification: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
        iso14001Certification: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
        emasCertification: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
        iso37001Certification: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
        iso37301Certification: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
        riskManagementSystemCertification: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
        amforiBsciAuditReport: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
        responsibleBusinessAssociationCertification: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
        fairLaborAssociationCertification: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
        additionalAudits: valueOrUndefined(faker.company.buzzNoun(), undefinedProbability),
        codeOfConduct: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
        codeOfConductTraining: valueOrUndefined(randomYesNo(), undefinedProbability),
        supplierCodeOfConduct: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
        policyStatement: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
        humanRightsStrategy: valueOrUndefined(faker.company.buzzNoun(), undefinedProbability),
        environmentalImpactPolicy: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
        fairWorkingConditionsPolicy: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
      },
      generalViolations: {
        responsibilitiesForFairWorkingConditions: valueOrUndefined(randomYesNo(), undefinedProbability),
        responsibilitiesForTheEnvironment: valueOrUndefined(randomYesNo(), undefinedProbability),
        responsibilitiesForOccupationalSafety: valueOrUndefined(randomYesNo(), undefinedProbability),
        legalProceedings: valueOrUndefined(randomYesNo(), undefinedProbability),
        humanRightsViolationS: valueOrUndefined(randomYesNo(), undefinedProbability),
        humanRightsViolations: valueOrUndefined(faker.company.buzzNoun(), undefinedProbability),
        humanRightsViolationAction: valueOrUndefined(randomYesNo(), undefinedProbability),
        humanRightsViolationActionMeasures: valueOrUndefined(faker.company.buzzNoun(), undefinedProbability),
        highRiskCountriesRawMaterials: valueOrUndefined(randomYesNo(), undefinedProbability),
        highRiskCountriesRawMaterialsLocation: valueOrUndefined(
          generateArray(getRandomIso2CountryCode),
          undefinedProbability,
        ),
        highRiskCountriesActivity: valueOrUndefined(randomYesNo(), undefinedProbability),
        highRiskCountries: valueOrUndefined(generateArray(getRandomIso2CountryCode), undefinedProbability),
        highRiskCountriesProcurement: valueOrUndefined(randomYesNo(), undefinedProbability),
        highRiskCountriesProcurementName: valueOrUndefined(
          generateArray(getRandomIso2CountryCode),
          undefinedProbability,
        ),
      },
    },
    social: {
      childLabor: {
        childLaborPreventionPolicy: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
        employeeSUnder18: valueOrUndefined(randomYesNo(), undefinedProbability),
        employeeSUnder15: valueOrUndefined(randomYesNo(), undefinedProbability),
        employeeSUnder18InApprenticeship: valueOrUndefined(randomYesNo(), undefinedProbability),
        worstFormsOfChildLaborProhibition: valueOrUndefined(randomYesNo(), undefinedProbability),
        worstFormsOfChildLabor: valueOrUndefined(randomYesNo(), undefinedProbability),
        worstFormsOfChildLaborForms: valueOrUndefined(faker.company.buzzNoun(), undefinedProbability),
        measuresForPreventionOfEmploymentUnderLocalMinimumAge: valueOrUndefined(randomYesNo(), undefinedProbability),
        employmentUnderLocalMinimumAgePreventionEmploymentContracts: valueOrUndefined(
          randomYesNo(),
          undefinedProbability,
        ),
        employmentUnderLocalMinimumAgePreventionJobDescription: valueOrUndefined(randomYesNo(), undefinedProbability),
        employmentUnderLocalMinimumAgePreventionIdentityDocuments: valueOrUndefined(
          randomYesNo(),
          undefinedProbability,
        ),
        employmentUnderLocalMinimumAgePreventionTraining: valueOrUndefined(randomYesNo(), undefinedProbability),
        employmentUnderLocalMinimumAgePreventionCheckingOfLegalMinimumAge: valueOrUndefined(
          randomYesNo(),
          undefinedProbability,
        ),
        additionalChildLaborMeasures: valueOrUndefined(faker.company.buzzNoun(), undefinedProbability),
      },
      forcedLaborSlavery: {
        forcedLaborAndSlaveryPrevention: valueOrUndefined(randomYesNo(), undefinedProbability),
        forcedLaborAndSlaveryPreventionPractices: valueOrUndefined(faker.company.buzzNoun(), undefinedProbability),
        forcedLaborPreventionPolicy: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
        forcedLaborAndSlaveryPreventionMeasures: valueOrUndefined(randomYesNo(), undefinedProbability),
        forcedLaborAndSlaveryPreventionEmploymentContracts: valueOrUndefined(randomYesNo(), undefinedProbability),
        forcedLaborAndSlaveryPreventionIdentityDocuments: valueOrUndefined(randomYesNo(), undefinedProbability),
        forcedLaborAndSlaveryPreventionFreeMovement: valueOrUndefined(randomYesNo(), undefinedProbability),
        forcedLaborAndSlaveryPreventionProvisionSocialRoomsAndToilets: valueOrUndefined(
          randomYesNo(),
          undefinedProbability,
        ),
        forcedLaborAndSlaveryPreventionTraining: valueOrUndefined(randomYesNo(), undefinedProbability),
        forcedLaborAndSlaveryPreventionMeasuresOther: valueOrUndefined(faker.company.buzzNoun(), undefinedProbability),
      },
      withholdingAdequateWages: {
        adequateWage: valueOrUndefined(randomYesNo(), undefinedProbability),
        adequateWagesMeasures: valueOrUndefined(randomYesNo(), undefinedProbability),
        documentedWorkingHoursAndWages: valueOrUndefined(randomYesNo(), undefinedProbability),
        adequateLivingWage: valueOrUndefined(randomYesNo(), undefinedProbability),
        regularWagesProcessFlow: valueOrUndefined(randomYesNo(), undefinedProbability),
        fixedHourlyWages: valueOrUndefined(randomYesNoNa(), undefinedProbability),
        fixedPieceworkWages: valueOrUndefined(randomYesNoNa(), undefinedProbability),
        adequateWageMeasures: valueOrUndefined(faker.company.buzzNoun(), undefinedProbability),
      },
      disregardForOccupationalHealthSafety: {
        lowSkillWork: valueOrUndefined(randomYesNo(), undefinedProbability),
        hazardousMachines: valueOrUndefined(randomYesNo(), undefinedProbability),
        oshPolicy: valueOrUndefined(randomYesNo(), undefinedProbability),
        oshPolicyPersonalProtectiveEquipment: valueOrUndefined(randomYesNoNa(), undefinedProbability),
        oshPolicyMachineSafety: valueOrUndefined(randomYesNoNa(), undefinedProbability),
        oshPolicyDisasterBehavioralResponse: valueOrUndefined(randomYesNo(), undefinedProbability),
        oshPolicyAccidentsBehavioralResponse: valueOrUndefined(randomYesNo(), undefinedProbability),
        oshPolicyWorkplaceErgonomics: valueOrUndefined(randomYesNo(), undefinedProbability),
        oshPolicyAccessToWork: valueOrUndefined(randomYesNo(), undefinedProbability),
        oshPolicyHandlingChemicalsAndOtherHazardousSubstances: valueOrUndefined(randomYesNoNa(), undefinedProbability),
        oshPolicyFireProtection: valueOrUndefined(randomYesNo(), undefinedProbability),
        oshPolicyWorkingHours: valueOrUndefined(randomYesNo(), undefinedProbability),
        oshPolicyTrainingAddressed: valueOrUndefined(randomYesNo(), undefinedProbability),
        oshPolicyTraining: valueOrUndefined(randomYesNo(), undefinedProbability),
        oshManagementSystem: valueOrUndefined(randomYesNo(), undefinedProbability),
        oshManagementSystemInternationalCertification: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
        oshManagementSystemNationalCertification: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
        under10WorkplaceAccidents: valueOrUndefined(randomYesNo(), undefinedProbability),
        oshTraining: valueOrUndefined(randomYesNo(), undefinedProbability),
        healthAndSafetyPolicy: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
      },
      disregardForFreedomOfAssociation: {
        freedomOfAssociation: valueOrUndefined(randomYesNo(), undefinedProbability),
        employeeRepresentation: valueOrUndefined(randomPercentageValue(), undefinedProbability),
        discriminationForTradeUnionMembers: valueOrUndefined(randomYesNo(), undefinedProbability),
        freedomOfOperationForTradeUnion: valueOrUndefined(randomYesNo(), undefinedProbability),
        freedomOfAssociationTraining: valueOrUndefined(randomYesNo(), undefinedProbability),
        worksCouncil: valueOrUndefined(randomYesNo(), undefinedProbability),
      },
      unequalTreatmentOfEmployment: {
        unequalTreatmentOfEmployment: valueOrUndefined(randomYesNo(), undefinedProbability),
        diversityAndInclusionRole: valueOrUndefined(randomYesNo(), undefinedProbability),
        preventionOfMistreatments: valueOrUndefined(randomYesNo(), undefinedProbability),
        equalOpportunitiesOfficer: valueOrUndefined(randomYesNo(), undefinedProbability),
        fairAndEthicalRecruitmentPolicy: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
        equalOpportunitiesAndNonDiscriminationPolicy: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
      },
      contaminationOfSoilWaterAirNoiseEmissionsExcessiveWaterConsumption: {
        harmfulSoilImpact: valueOrUndefined(randomYesNo(), undefinedProbability),
        soilDegradation: valueOrUndefined(randomYesNo(), undefinedProbability),
        soilErosion: valueOrUndefined(randomYesNo(), undefinedProbability),
        soilBorneDiseases: valueOrUndefined(randomYesNo(), undefinedProbability),
        soilContamination: valueOrUndefined(randomYesNo(), undefinedProbability),
        soilSalinization: valueOrUndefined(randomYesNo(), undefinedProbability),
        harmfulWaterPollution: valueOrUndefined(randomYesNo(), undefinedProbability),
        fertilizersOrPollutants: valueOrUndefined(randomYesNo(), undefinedProbability),
        wasteWaterFiltration: valueOrUndefined(randomYesNo(), undefinedProbability),
        harmfulAirPollution: valueOrUndefined(randomYesNo(), undefinedProbability),
        airFiltration: valueOrUndefined(randomYesNo(), undefinedProbability),
        harmfulNoiseEmission: valueOrUndefined(randomYesNo(), undefinedProbability),
        reduceNoiseEmissions: valueOrUndefined(randomYesNo(), undefinedProbability),
        excessiveWaterConsumption: valueOrUndefined(randomYesNo(), undefinedProbability),
        waterSavingMeasures: valueOrUndefined(randomYesNo(), undefinedProbability),
        waterSavingMeasuresName: valueOrUndefined(faker.company.buzzNoun(), undefinedProbability),
        pipeMaintaining: valueOrUndefined(randomYesNo(), undefinedProbability),
        waterSources: valueOrUndefined(randomYesNo(), undefinedProbability),
        contaminationMeasures: valueOrUndefined(faker.company.buzzNoun(), undefinedProbability),
      },
      unlawfulEvictionDeprivationOfLandForestAndWater: {
        unlawfulEvictionAndTakingOfLand: valueOrUndefined(randomYesNo(), undefinedProbability),
        unlawfulEvictionAndTakingOfLandRisk: valueOrUndefined(faker.company.buzzNoun(), undefinedProbability),
        unlawfulEvictionAndTakingOfLandStrategies: valueOrUndefined(randomYesNo(), undefinedProbability),
        unlawfulEvictionAndTakingOfLandStrategiesName: valueOrUndefined(faker.company.buzzNoun(), undefinedProbability),
        voluntaryGuidelinesOnTheResponsibleGovernanceOfTenure: valueOrUndefined(randomYesNo(), undefinedProbability),
      },
      useOfPrivatePublicSecurityForcesWithDisregardForHumanRights: {
        useOfPrivatePublicSecurityForces: valueOrUndefined(randomYesNo(), undefinedProbability),
        useOfPrivatePublicSecurityForcesAndRiskOfViolationOfHumanRights: valueOrUndefined(
          randomYesNo(),
          undefinedProbability,
        ),
        instructionOfSecurityForces: valueOrUndefined(randomYesNo(), undefinedProbability),
        humanRightsTraining: valueOrUndefined(randomYesNo(), undefinedProbability),
        stateSecurityForces: valueOrUndefined(randomYesNoNa(), undefinedProbability),
        privateSecurityForces: valueOrUndefined(randomYesNoNa(), undefinedProbability),
        useOfPrivatePublicSecurityForcesMeasures: valueOrUndefined(faker.company.buzzNoun(), undefinedProbability),
      },
    },
    environmental: {
      useOfMercuryMercuryWasteMinamataConvention: {
        mercuryAndMercuryWasteHandling: valueOrUndefined(randomYesNo(), undefinedProbability),
        mercuryAndMercuryWasteHandlingPolicy: valueOrUndefined(
          generateBaseDataPoint(randomYesNo(), undefinedProbability),
          undefinedProbability,
        ),
        mercuryAddedProductsHandling: valueOrUndefined(randomYesNo(), undefinedProbability),
        mercuryAddedProductsHandlingRiskOfExposure: valueOrUndefined(randomYesNo(), undefinedProbability),
        mercuryAddedProductsHandlingRiskOfDisposal: valueOrUndefined(randomYesNo(), undefinedProbability),
        mercuryAndMercuryCompoundsProductionAndUse: valueOrUndefined(randomYesNo(), undefinedProbability),
        mercuryAndMercuryCompoundsProductionAndUseRiskOfExposure: valueOrUndefined(randomYesNo(), undefinedProbability),
      },
      productionAndUseOfPersistentOrganicPollutantsPopsConvention: {
        persistentOrganicPollutantsProductionAndUse: valueOrUndefined(randomYesNo(), undefinedProbability),
        persistentOrganicPollutantsUsed: valueOrUndefined(faker.company.buzzNoun(), undefinedProbability),
        persistentOrganicPollutantsProductionAndUseRiskOfExposure: valueOrUndefined(
          randomYesNo(),
          undefinedProbability,
        ),
        persistentOrganicPollutantsProductionAndUseRiskOfDisposal: valueOrUndefined(
          randomYesNo(),
          undefinedProbability,
        ),
        legalRestrictedWasteProcesses: valueOrUndefined(randomYesNo(), undefinedProbability),
      },
      exportImportOfHazardousWasteBaselConvention: {
        persistentOrganicPollutantsProductionAndUseTransboundaryMovements: valueOrUndefined(
          randomYesNo(),
          undefinedProbability,
        ),
        persistentOrganicPollutantsProductionAndUseRiskForImportingState: valueOrUndefined(
          randomYesNo(),
          undefinedProbability,
        ),
        hazardousWasteTransboundaryMovementsLocatedOecdEuLiechtenstein: valueOrUndefined(
          randomYesNo(),
          undefinedProbability,
        ),
        hazardousWasteTransboundaryMovementsOutsideOecdEuOrLiechtenstein: valueOrUndefined(
          randomYesNo(),
          undefinedProbability,
        ),
        hazardousWasteDisposal: valueOrUndefined(randomYesNo(), undefinedProbability),
        hazardousWasteDisposalRiskOfImport: valueOrUndefined(randomYesNo(), undefinedProbability),
        hazardousWasteDisposalOtherWasteImport: valueOrUndefined(randomYesNo(), undefinedProbability),
      },
    },
  };
}
