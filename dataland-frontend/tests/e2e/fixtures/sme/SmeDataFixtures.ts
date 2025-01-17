import { faker } from "@faker-js/faker";
import {
  EnergySourceForHeatingAndHotWater,
  NaturalHazard,
  PercentRangeForEnergyConsumptionCoveredByOwnRenewablePower,
  PercentRangeForInvestmentsInEnergyEfficiency,
  type SmeData,
  type SmeProduct,
  type SmeProductionSite,
} from "@clients/backend";
import { generateInt } from "@e2e/fixtures/common/NumberFixtures";
import { DEFAULT_PROBABILITY, Generator } from "@e2e/utils/FakeFixtureUtils";
import { generateNaceCodes } from "@e2e/fixtures/common/NaceCodeFixtures";
import { generateAddress } from "@e2e/fixtures/common/AddressFixtures";
import { generateFutureDate } from "@e2e/fixtures/common/DateFixtures";
import { generateFixtureDataset, pickOneElement, pickSubsetOfElements } from "@e2e/fixtures/FixtureUtils";
import { type FixtureData } from "@sharedUtils/Fixtures";

/**
 * Generates a set number of SME fixtures
 * @param numFixtures the number of SME fixtures to generate
 * @param undefinedProbability the probability (as number between 0 and 1) for "undefined" values in nullable fields
 * @returns a set number of SME fixtures
 */
export function generateSmeFixtures(
  numFixtures: number,
  undefinedProbability = DEFAULT_PROBABILITY,
): FixtureData<SmeData>[] {
  return generateFixtureDataset<SmeData>(() => generateSmeData(undefinedProbability), numFixtures);
}

/**
 * Generates a random SME dataset
 * @param undefinedProbability the probability (as number between 0 and 1) for "undefined" values in nullable fields
 * @returns a random SME dataset
 */
export function generateSmeData(undefinedProbability = DEFAULT_PROBABILITY): SmeData {
  const dataGenerator = new SmeGenerator(undefinedProbability);
  return {
    general: {
      basicInformation: {
        sector: generateNaceCodes(1),
        addressOfHeadquarters: generateAddress(dataGenerator.undefinedProbability),
        numberOfEmployees: generateInt(10000),
        fiscalYearStart: generateFutureDate(),
      },
      companyFinancials: {
        revenueInEur: dataGenerator.randomInt(100000000),
        operatingCostInEur: dataGenerator.randomInt(80000000),
        capitalAssetsInEur: dataGenerator.randomInt(70000000),
      },
    },
    production: {
      sites: {
        listOfProductionSites: dataGenerator.randomProductionSite(),
      },
      products: {
        listOfProducts: dataGenerator.randomProduct(),
      },
    },
    power: {
      investments: {
        percentageOfInvestmentsInEnhancingEnergyEfficiency:
          dataGenerator.randomPercentageRangeInvestmentEnergyEfficiency(),
      },
      consumption: {
        powerConsumptionInMwh: dataGenerator.randomInt(2000),
        powerFromRenewableSources: dataGenerator.randomYesNo(),
        energyConsumptionHeatingAndHotWater: dataGenerator.randomInt(1000),
        primaryEnergySourceForHeatingAndHotWater: dataGenerator.randomHeatSource(),
        energyConsumptionCoveredByOwnRenewablePowerGeneration: dataGenerator.randomPercentageRangeEnergyConsumption(),
      },
    },
    insurances: {
      naturalHazards: {
        insuranceAgainstNaturalHazards: dataGenerator.randomYesNo(),
        amountCoveredByInsuranceAgainstNaturalHazards: dataGenerator.randomInt(50000000),
        naturalHazardsCovered: dataGenerator.randomSelectionOfNaturalHazards(),
      },
    },
  };
}

class SmeGenerator extends Generator {
  /**
   * Generates a random product
   * @returns a random product
   */
  randomProduct(): SmeProduct[] | undefined {
    return this.randomArray((): SmeProduct => {
      return {
        name: faker.commerce.productName(),
        shareOfTotalRevenueInPercent: this.randomPercentageValue(),
      };
    });
  }

  /**
   * Generates a random production site
   * @returns a random production site
   */
  randomProductionSite(): SmeProductionSite[] | undefined {
    return this.randomArray((): SmeProductionSite => {
      return {
        nameOfProductionSite: this.valueOrUndefined(faker.company.name()),
        addressOfProductionSite: generateAddress(this.undefinedProbability),
        shareOfTotalRevenueInPercent: this.randomPercentageValue(),
      };
    });
  }

  /**
   * Picks a random percentage range option
   * @returns a random percentage range option
   */
  randomPercentageRangeEnergyConsumption(): PercentRangeForEnergyConsumptionCoveredByOwnRenewablePower | undefined {
    return this.valueOrUndefined(
      pickOneElement(Object.values(PercentRangeForEnergyConsumptionCoveredByOwnRenewablePower)),
    );
  }

  /**
   * Picks a random percentage range option
   * @returns a random percentage range option
   */
  randomPercentageRangeInvestmentEnergyEfficiency(): PercentRangeForInvestmentsInEnergyEfficiency | undefined {
    return this.valueOrUndefined(pickOneElement(Object.values(PercentRangeForInvestmentsInEnergyEfficiency)));
  }

  /**
   * Picks a random heat source
   * @returns a random heat source
   */
  randomHeatSource(): EnergySourceForHeatingAndHotWater | undefined {
    return this.valueOrUndefined(pickOneElement(Object.values(EnergySourceForHeatingAndHotWater)));
  }

  /**
   * Picks a random natural hazard
   * @returns a random natural hazard
   */
  randomSelectionOfNaturalHazards(): NaturalHazard[] | undefined {
    return this.valueOrUndefined(pickSubsetOfElements(Object.values(NaturalHazard)));
  }
}
