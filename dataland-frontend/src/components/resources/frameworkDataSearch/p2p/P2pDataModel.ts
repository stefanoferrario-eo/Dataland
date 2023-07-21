import { PathwaysToParisData, P2pSector } from "@clients/backend";
import { Category } from "@/utils/GenericFrameworkTypes";

export const p2pDataModel = [
  {
    name: "general",
    label: "General",
    color: "orange",
    showIf: (): boolean => true,
    subcategories: [
      {
        name: "general",
        label: "General",
        fields: [
          {
            name: "dataDate",
            label: "Data Date",
            description: "The date until when the information collected is valid",
            component: "DateFormField",
            required: true,
            showIf: (): boolean => true,
            validation: "required",
          },
          {
            name: "sector",
            label: "Sector",
            description: "To which sector does the company belong?",
            component: "InputTextFormField",
            required: true,
            showIf: (): boolean => true,
            validation: "required",
          },
        ],
      },
      {
        name: "governance",
        label: "Governance",
        fields: [
          {
            name: "organisationalResponsibilityForParisCompatibility",
            label: "Organisational responsibility for Paris compatibility",
            description:
              "Whether or not the organisational responsibility for Paris compatibility in the company lies with the Executive Board/Management",
            component: "YesNoFormField",
            required: false,
            showIf: (): boolean => true,
            certificateRequiredIfYes: false,
          },
          {
            name: "parisCompatibilityInExecutiveRemuneration",
            label: "Paris compatibility in executive remuneration",
            description:
              "Share of executive managers with variable pay for meeting climate targets and transformation plans",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "parisCompatibilityInAverageRemuneration",
            label: "Paris compatibility in average remuneration",
            description: "Average amount of variable pay linked to climate targets in the remuneration system",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "shareOfEmployeesTrainedOnParisCompatibility",
            label: "Share of employees trained on Paris compatibility",
            description:
              "Share of employees who have been trained, at least once, on how to integrate a Paris-compatible strategy into everyday work processes",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "qualificationRequirementsOnParisCompatibility",
            label: "Qualification requirements on Paris compatibility",
            description:
              "Qualification requirements and/or mandatory Paris-compatibility training for top management and employees",
            component: "YesNoFormField",
            required: false,
            showIf: (): boolean => true,
            certificateRequiredIfYes: false,
          },
          {
            name: "mobilityAndTravelPolicy",
            label: "Mobility and travel policy",
            description: "Existence of a Paris-compatible mobility and travel policy",
            component: "YesNoFormField",
            required: false,
            showIf: (): boolean => true,
            certificateRequiredIfYes: false,
          },
          {
            name: "upstreamSupplierEngagementStrategy",
            label: "Upstream supplier engagement strategy",
            description:
              "Existence of a fit-for-purpose engagement strategy with relevant processes for the upstream supply chain",
            component: "YesNoFormField",
            required: false,
            showIf: (): boolean => true,
            certificateRequiredIfYes: false,
          },
          {
            name: "upstreamSupplierProcurementPolicy",
            label: "Upstream supplier procurement policy",
            description: "Existence of a Paris-compatible procurement policy",
            component: "YesNoFormField",
            required: false,
            showIf: (): boolean => true,
            certificateRequiredIfYes: false,
          },
          {
            name: "downstreamCustomerEngagement",
            label: "Downstream customer engagement",
            description: "Existence of a fit-for-purpose engagement strategy with relevant processes for customers",
            component: "YesNoFormField",
            required: false,
            showIf: (): boolean => true,
            certificateRequiredIfYes: false,
          },
          {
            name: "policymakerEngagement",
            label: "Policymaker engagement",
            description:
              "Lobbying/advocacy: support for Paris-compatible lobbying activities in industry and business associations",
            component: "YesNoFormField",
            required: false,
            showIf: (): boolean => true,
            certificateRequiredIfYes: false,
          },
        ],
      },
      {
        name: "climateTargets",
        label: "Climate Targets",
        fields: [
          {
            name: "shortTermScienceBasedClimateTarget",
            label: "Short-term science-based climate target",
            description: "Existence of a science-based Paris-compatible climate target (short-term target: 5-10 years)",
            component: "YesNoFormField",
            required: false,
            showIf: (): boolean => true,
            certificateRequiredIfYes: false,
          },
          {
            name: "longTermScienceBasedClimateTarget",
            label: "Long-term science-based climate target",
            description: "Existence of a science-based Paris-compatible climate target (long-term target: > 10 years)",
            component: "YesNoFormField",
            required: false,
            showIf: (): boolean => true,
            certificateRequiredIfYes: false,
          },
        ],
      },
      {
        name: "emissionsPlanning",
        label: "Emissions planning",
        fields: [
          {
            name: "reductionOfAbsoluteEmissions",
            label: "Reduction of absolute emissions",
            description:
              "Use of a science-based, sector-specific Paris-compatible GHG emission reduction trajectory (Scopes 1-3) to meet climate targets and net-zero commitments represented in absolute emissions",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "reductionOfRelativeEmissions",
            label: "Reduction of relative emissions",
            description:
              "Use of a science-based, sector-specific Paris-compatible GHG emission reduction trajectory (Scopes 1-3) to meet climate targets and net-zero commitments represented in relative emissions (if applicable)",
            component: "NumberFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "absoluteEmissions",
            label: "Absolute emissions",
            description:
              "Transparent accounting & disclosure of all greenhouse gas emissions (Scope 1, Scope 2, Scope 3) along the following metric: absolute emissions",
            component: "NumberFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "relativeEmissions",
            label: "Relative emissions",
            description:
              "Transparent accounting & disclosure of all greenhouse gas emissions (Scope 1, Scope 2, Scope 3) along the following metric: relative emissions (if applicable)",
            component: "NumberFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "climateActionPlan",
            label: "Climate action plan",
            description:
              "Existence of an action plan to meet climate targets and net-zero commitments. Plausible emission reduction measures to achieve these GHG reduction targets (the sectoral indicators, among others, are used for Scopes 1 and 2); Ideally: Min. every 5 years, external validation of the progress achieved compared to the selected Paris-compatible transformation pathway to achieve set climate targets (ideally SBT -1.5 °C).",
            component: "YesNoFormField",
            required: false,
            showIf: (): boolean => true,
            certificateRequiredIfYes: false,
          },
          {
            name: "useOfInternalCarbonPrice",
            label: "Use of internal carbon price",
            description:
              "The internal/imputed/shadow carbon price and its dynamic structure should be derived from science-based models and scenarios that are consistent with the Paris targets.",
            component: "YesNoFormField",
            required: false,
            showIf: (): boolean => true,
            certificateRequiredIfYes: false,
          },
        ],
      },
      {
        name: "investmentPlanning",
        label: "Investment planning",
        fields: [
          {
            name: "investmentPlanForClimateTargets",
            label: "Investment plan for climate targets",
            description: "Investment planning consistently reflects emissions and measures planning",
            component: "YesNoFormField",
            required: false,
            showIf: (): boolean => true,
            certificateRequiredIfYes: false,
          },
          {
            name: "capexShareInNetZeroSolutions",
            label: "CapEx share in net-zero solutions",
            description: "Share of CapEx in net-zero solutions over the next 10 years of total CapEx",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "capexShareInGhgIntensivePlants",
            label: "CapEx share in GHG-intensive plants",
            description: "Share of CapEx on GHG-intensive production plants over the next 10 years of total CapEx",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "researchAndDevelopmentExpenditureForNetZeroSolutions",
            label: "Research and development expenditure for net-zero solutions",
            description: "Share of CapEx on net-zero solutions of total CapEx",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
        ],
      },
    ],
  },
  {
    name: "ammonia",
    label: "Ammonia",
    color: "green",
    showIf: (dataModel: PathwaysToParisData): boolean =>
      dataModel.general.general.sector.some((p2pSector) => p2pSector === P2pSector.Ammonia),
    subcategories: [
      {
        name: "decarbonisation",
        label: "Decarbonisation",
        fields: [
          {
            name: "energyMix",
            label: "Energy mix",
            description: "Share of renewable energy in total electricity consumption",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "ccsTechnologyAdoption",
            label: "CCS technology adoption",
            description: "Share of emissions accounted for by captured emissions in total emissions",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "electrification",
            label: "Electrification",
            description: "Degree of electrification of the ammonia production plant(s)",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
        ],
      },
      {
        name: "defossilisation",
        label: "Defossilisation",
        fields: [
          {
            name: "useOfRenewableFeedstocks",
            label: "Use of renewable feedstocks",
            description: "Share of alternative, renewable feedstocks in total raw material use",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
        ],
      },
    ],
  },
  {
    name: "automotive",
    label: "Automotive",
    color: "green",
    showIf: (dataModel: PathwaysToParisData): boolean =>
      dataModel.general.general.sector.some((p2pSector) => p2pSector === P2pSector.Automotive),
    subcategories: [
      {
        name: "energy",
        label: "Energy",
        fields: [
          {
            name: "productionSiteEnergyConsumption",
            label: "Production site energy consumption",
            description: "Absolute total energy consumption of the company's production sites",
            component: "NumberFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "energyMix",
            label: "Energy mix",
            description: "Share of renewable energy in total electricity consumption",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
        ],
      },
      {
        name: "technologyValueCreation",
        label: "Technology/value creation",
        fields: [
          {
            name: "driveMix",
            label: "Drive mix",
            description:
              "For manufacturers: Share of zero emission vehicles in new vehicles registered. For suppliers: Target use of the drive-relevant technologies",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "icAndHybridEnginePhaseOutDate",
            label: "IC & hybrid engine phase-out date",
            description: "Phase-out date of internal combustion engine and hybrid engine (end or exit date)",
            component: "DateFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "futureValueCreationStrategy",
            label: "Future value creation strategy",
            description: "Strategy for generating future value creation in the changing marketplace",
            component: "YesNoFormField",
            required: false,
            showIf: (): boolean => true,
            certificateRequiredIfYes: false,
          },
        ],
      },
      {
        name: "materials",
        label: "Materials",
        fields: [
          {
            name: "materialUseManagement",
            label: "Material use management",
            description: "Share of CO2-free or low-carbon metals in total material use",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "useOfSecondaryMaterials",
            label: "Use of secondary materials",
            description: "Share of secondary materials in total material use",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
        ],
      },
    ],
  },
  {
    name: "hvcPlastics",
    label: "HVC Plastics",
    color: "green",
    showIf: (dataModel: PathwaysToParisData): boolean =>
      dataModel.general.general.sector.some((p2pSector) => p2pSector === P2pSector.HvcPlastics),
    subcategories: [
      {
        name: "decarbonisation",
        label: "Decarbonisation",
        fields: [
          {
            name: "energyMix",
            label: "Energy mix",
            description: "Share of renewable energy in total electricity consumption",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "electrification",
            label: "Electrification",
            description: "Share of electricity-based production",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
        ],
      },
      {
        name: "defossilisation",
        label: "Defossilisation",
        fields: [
          {
            name: "useOfRenewableFeedstocks",
            label: "Use of renewable feedstocks",
            description: "Share of alternative, renewable feedstocks in total feedstock use",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "useOfBioplastics",
            label: "Use of bioplastics",
            description: "Share of bioplastics in total feedstock use",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "useOfCo2FromCarbonCaptureAndReUseTechnologies",
            label: "Use of CO2 from Carbon capture and re-use technologies",
            description: "Share of CO2 as feedstock from non-fossil sources",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "carbonCaptureAndUseStorageTechnologies",
            label: "Carbon capture and use/storage technologies",
            description: "Share of CO2 as feedstock from non-fossil sources",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
        ],
      },
      {
        name: "recycling",
        label: "Recycling",
        fields: [
          {
            name: "contributionToCircularEconomy",
            label: "Contribution to circular economy",
            description: "",
            component: "YesNoFormField",
            required: false,
            showIf: (): boolean => true,
            certificateRequiredIfYes: false,
          },
          {
            name: "materialRecycling",
            label: "Material recycling",
            description: "Share of recyclates in total feedstock use",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "chemicalRecycling",
            label: "Chemical recycling",
            description: "Share of materials from chemical recycling in total feedstock use",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
        ],
      },
    ],
  },
  {
    name: "commercialRealEstate",
    label: "Commercial Real Estate",
    color: "green",
    showIf: (dataModel: PathwaysToParisData): boolean =>
      dataModel.general.general.sector.some((p2pSector) => p2pSector === P2pSector.CommercialRealEstate),
    subcategories: [
      {
        name: "buildingEfficiency",
        label: "Building efficiency",
        fields: [
          {
            name: "buildingSpecificReburbishmentRoadmap",
            label: "Building-specific reburbishment roadmap",
            description:
              "Share of buildings with a building-specific refurbishment roadmap that corresponds to the GHG emission reduction trajectory in total commercial buildings portfolio",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "zeroEmissionBuildingShare",
            label: "Zero-emission building share",
            description: "Share of zero-emission buildings in the total commercial building portfolio",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "buildingEnergyEfficiency",
            label: "Building energy efficiency",
            description: "Energy requirement in kWh/m²a",
            component: "NumberFormField",
            required: false,
            showIf: (): boolean => true,
          },
        ],
      },
      {
        name: "energySource",
        label: "Energy source",
        fields: [
          {
            name: "renewableHeating",
            label: "Renewable heating",
            description: "Share of heat from renewable sources of total heat supply",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
        ],
      },
      {
        name: "technology",
        label: "Technology",
        fields: [
          {
            name: "useOfDistrictHeatingNetworks",
            label: "Use of (district) heating networks",
            description: "",
            component: "YesNoFormField",
            required: false,
            showIf: (): boolean => true,
            certificateRequiredIfYes: false,
          },
          {
            name: "heatPumpUsage",
            label: "Heat pump usage",
            description: "",
            component: "YesNoFormField",
            required: false,
            showIf: (): boolean => true,
            certificateRequiredIfYes: false,
          },
        ],
      },
    ],
  },
  {
    name: "residentialRealEstate",
    label: "Residential Real Estate",
    color: "green",
    showIf: (dataModel: PathwaysToParisData): boolean =>
      dataModel.general.general.sector.some((p2pSector) => p2pSector === P2pSector.ResidentialRealEstate),
    subcategories: [
      {
        name: "buildingEfficiency",
        label: "Building efficiency",
        fields: [
          {
            name: "buildingSpecificReburbishmentRoadmap",
            label: "Building-specific reburbishment roadmap",
            description:
              "Share of buildings with a building-specific refurbishment roadmap that corresponds to the GHG emission reduction trajectory in total residential buildings portfolio",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "zeroEmissionBuildingShare",
            label: "Zero-emission building share",
            description: "Share of zero-emission buildings in the total residential building portfolio",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "buildingEnergyEfficiency",
            label: "Building energy efficiency",
            description: "Energy requirement in kWh/m²a",
            component: "NumberFormField",
            required: false,
            showIf: (): boolean => true,
          },
        ],
      },
      {
        name: "energySource",
        label: "Energy source",
        fields: [
          {
            name: "renewableHeating",
            label: "Renewable heating",
            description: "Share of heat from renewable sources of total heat supply",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
        ],
      },
      {
        name: "technology",
        label: "Technology",
        fields: [
          {
            name: "useOfDistrictHeatingNetworks",
            label: "Use of (district) heating networks",
            description: "",
            component: "YesNoFormField",
            required: false,
            showIf: (): boolean => true,
            certificateRequiredIfYes: false,
          },
          {
            name: "heatPumpUsage",
            label: "Heat pump usage",
            description: "",
            component: "YesNoFormField",
            required: false,
            showIf: (): boolean => true,
            certificateRequiredIfYes: false,
          },
        ],
      },
    ],
  },
  {
    name: "steel",
    label: "Steel",
    color: "green",
    showIf: (dataModel: PathwaysToParisData): boolean =>
      dataModel.general.general.sector.some((p2pSector) => p2pSector === P2pSector.Steel),
    subcategories: [
      {
        name: "energy",
        label: "Energy",
        fields: [
          {
            name: "emissionIntensityOfElectricity",
            label: "Emission intensity of electricity",
            description: "Electric arc furnace (EAF)",
            component: "NumberFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "greenHydrogenUsage",
            label: "Green hydrogen usage",
            description:
              "Use of green hydrogen according to the EU Taxonomy (only for hydrogen-based steel production)",
            component: "YesNoFormField",
            required: false,
            showIf: (): boolean => true,
            certificateRequiredIfYes: false,
          },
        ],
      },
      {
        name: "technology",
        label: "Technology",
        fields: [
          {
            name: "blastFurnacePhaseOut",
            label: "Blast furnace phase-out",
            description:
              "Phase-out pathway: Share of steel produced without CCS in steel production of the blast furnace route",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "lowCarbonSteelScaleUp",
            label: "Low carbon steel scale-up",
            description: "Scale-up pathway: share of no /low carbon steel in total steel production",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
        ],
      },
    ],
  },
  {
    name: "freightTransportByRoad",
    label: "Freight transport by road",
    color: "green",
    showIf: (dataModel: PathwaysToParisData): boolean =>
      dataModel.general.general.sector.some((p2pSector) => p2pSector === P2pSector.FreightTransportByRoad),
    subcategories: [
      {
        name: "technology",
        label: "Technology",
        fields: [
          {
            name: "driveMix",
            label: "Drive mix",
            description: "Share of alternative drive types per fleet segment",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "icePhaseOut",
            label: "ICE phase-out",
            description: "Internal combustion engine phase-out",
            component: "DateFormField",
            required: false,
            showIf: (): boolean => true,
          },
        ],
      },
      {
        name: "energy",
        label: "Energy",
        fields: [
          {
            name: "fuelMix",
            label: "Fuel mix",
            description: "Share of biofuels blended into Diesel",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
        ],
      },
    ],
  },
  {
    name: "electricityGeneration",
    label: "Electricity generation",
    color: "green",
    showIf: (dataModel: PathwaysToParisData): boolean =>
      dataModel.general.general.sector.some((p2pSector) => p2pSector === P2pSector.ElectricityGeneration),
    subcategories: [
      {
        name: "technology",
        label: "Technology",
        fields: [
          {
            name: "electricityMixEmissions",
            label: "Electricity mix emissions",
            description: "Emission intensity of the created electricity mix",
            component: "NumberFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "shareOfRenewableElectricity",
            label: "Share of renewable electricity",
            description: "Share of electricity produced from renewables in total electricity production",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "naturalGasPhaseOut",
            label: "Natural gas phase-out",
            description: "Phase-out plan, including year",
            component: "DateFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "coalPhaseOut",
            label: "Coal phase-out",
            description: "Phase-out plan, including year",
            component: "DateFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "storageCapacityExpansion",
            label: "Storage capacity expansion",
            description: "Share of storage of average daily production in total electricity production",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
        ],
      },
    ],
  },
  {
    name: "livestockFarming",
    label: "Livestock farming",
    color: "green",
    showIf: (dataModel: PathwaysToParisData): boolean =>
      dataModel.general.general.sector.some((p2pSector) => p2pSector === P2pSector.LivestockFarming),
    subcategories: [
      {
        name: "emissionsFromManureAndFertiliserAndLivestock",
        label: "Emissions from manure and fertiliser and livestock",
        fields: [
          {
            name: "compostedFermentedManure",
            label: "Composted/fermented manure",
            description:
              "Share of composted or fermented manure n the total amount of manure produced in indoor livestock systems",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "emissionProofFertiliserStorage",
            label: "Emission-proof fertiliser storage",
            description:
              "Share of emission-proof storage of fertiliser in the total amount of fertiliser from indoor livestock systems",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
        ],
      },
      {
        name: "animalWelfare",
        label: "Animal welfare",
        fields: [
          {
            name: "mortalityRate",
            label: "Mortality rate",
            description: "",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
        ],
      },
      {
        name: "animalFeed",
        label: "Animal feed",
        fields: [
          {
            name: "ownFeedPercentage",
            label: "Own feed percentage",
            description: "Share of own feed in total feed quantity",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "externalFeedCertification",
            label: "External feed certification",
            description:
              "E.g. deforestation-free feed, feed production in compliance with minimum social standards (e.g. ILO labour standards, exclusion of displacement of indigenous people). Appropriate certificates for soy as feed are e.g. DonauSoja/Europa Soja, ProTerra Certification, Roundtable for Responsible Soy - RTRS Non-GMO Credits (RTRS NON-GMO)",
            component: "YesNoFormField",
            required: false,
            showIf: (): boolean => true,
            certificateRequiredIfYes: true,
          },
          {
            name: "originOfExternalFeed",
            label: "Origin of external feed",
            description:
              "Qualitative assessment of regional risks of origin (e.g. deforestation of rainforest, displacement of indigenous peoples for feed production) and the transport route.",
            component: "InputTextFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "excessNitrogen",
            label: "Excess nitrogen",
            description: "",
            component: "NumberFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "cropRotation",
            label: "Crop rotation",
            description: "Number of crops in rotation",
            component: "NumberFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "climateFriendlyProteinProduction",
            label: "Climate-friendly protein production",
            description:
              "Share of climate-friendly proteins farmed in the total amount of protein in the concentrated feed used",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "greenFodderPercentage",
            label: "Green fodder percentage",
            description: "Share of green fodder in the total feed quantity",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
        ],
      },
      {
        name: "energy",
        label: "Energy",
        fields: [
          {
            name: "renewableElectricityPercentage",
            label: "Renewable electricity percentage",
            description: "Share of electricity from renewables in total electricity consumption",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "renewableHeatingPercentage",
            label: "Renewable heating percentage",
            description: "Share of heating from renewables in total heat supply",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "electricGasPoweredMachineryVehiclePercentage",
            label: "Electric/gas-powered machinery/vehicle percentage",
            description: "Share of electric/gas-powered machines/vehicles in total machinery/vehicle fleet",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
        ],
      },
    ],
  },
  {
    name: "cement",
    label: "Cement",
    color: "green",
    showIf: (dataModel: PathwaysToParisData): boolean =>
      dataModel.general.general.sector.some((p2pSector) => p2pSector === P2pSector.Cement),
    subcategories: [
      {
        name: "energy",
        label: "Energy",
        fields: [
          {
            name: "energyMix",
            label: "Energy mix",
            description: "Share of renewable energy in total electricity consumption",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "fuelMix",
            label: "Fuel mix",
            description: "Share of biogenic fuels in the total mix",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "thermalEnergyEfficiency",
            label: "Thermal energy efficiency",
            description: "Heat recovery rate in the process of clinker production",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "compositionOfThermalInput",
            label: "Composition of thermal input",
            description: "Share of (green) hydrogen in thermal input",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
        ],
      },
      {
        name: "technology",
        label: "Technology",
        fields: [
          {
            name: "carbonCaptureAndUseTechnologyUsage",
            label: "Carbon capture and use technology usage",
            description: "(Planning) use of carbon capture and use technologies (CCCS/CU)",
            component: "YesNoFormField",
            required: false,
            showIf: (): boolean => true,
            certificateRequiredIfYes: false,
          },
          {
            name: "electrificationOfProcessHeat",
            label: "Electrification of process heat",
            description: "Degree of electrification of production and processes",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
        ],
      },
      {
        name: "material",
        label: "Material",
        fields: [
          {
            name: "clinkerFactorReduction",
            label: "Clinker factor reduction",
            description: "",
            component: "NumberFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "preCalcinedClayUsage",
            label: "Pre-calcined clay usage",
            description: "Share of pre-calcined clays in the material mix",
            component: "PercentageFormField",
            required: false,
            showIf: (): boolean => true,
          },
          {
            name: "circularEconomyContribution",
            label: "Circular economy contribution",
            description: "Use of industrial by-products/co-products",
            component: "YesNoFormField",
            required: false,
            showIf: (): boolean => true,
            certificateRequiredIfYes: false,
          },
        ],
      },
    ],
  },
] as Array<Category>;
