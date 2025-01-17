import { type TreeNode } from "primevue/tree";
// Content is based on https://ec.europa.eu/sustainable-finance-taxonomy/assets/taxonomy.json
export const activityTree: Array<TreeNode> = [
  {
    name: "Forestry",
    key: "1",
    sector: "Forestry",
    type: "header",
    children: [
      {
        name: "Afforestation",
        value: "Afforestation",
        key: "1.1",
        sector: "Forestry",
        type: "child",
        naceCodes: ["A2"],
      },
      {
        name: "Rehabilitation and restoration of forests, including reforestation and natural forest regeneration after an extreme event",
        value:
          "RehabilitationAndRestorationOfForestsIncludingReforestationAndNaturalForestRegenerationAfterAnExtremeEvent",
        key: "1.2",
        sector: "Forestry",
        type: "child",
        naceCodes: ["A2"],
      },
      {
        name: "Forest management",
        value: "ForestManagement",
        key: "1.3",
        sector: "Forestry",
        type: "child",
        naceCodes: ["A2"],
      },
      {
        name: "Conservation forestry",
        value: "ConservationForestry",
        key: "1.4",
        sector: "Forestry",
        type: "child",
        naceCodes: ["A2"],
      },
    ],
  },
  {
    name: "Environmental protection and restoration activities",
    key: "2",
    sector: "Environmental protection and restoration activities",
    type: "header",
    children: [
      {
        name: "Restoration of wetlands",
        value: "RestorationOfWetlands",
        key: "2.1",
        sector: "Environmental protection and restoration activities",
        type: "child",
      },
    ],
  },
  {
    name: "Manufacturing",
    key: "3",
    sector: "Manufacturing",
    type: "header",
    children: [
      {
        name: "Manufacture of renewable energy technologies",
        value: "ManufactureOfRenewableEnergyTechnologies",
        key: "3.1",
        sector: "Manufacturing",
        type: "child",
        naceCodes: ["C25", "C27", "C28"],
      },
      {
        name: "Manufacture of equipment for the production and use of hydrogen",
        value: "ManufactureOfEquipmentForTheProductionAndUseOfHydrogen",
        key: "3.2",
        sector: "Manufacturing",
        type: "child",
        naceCodes: ["C25", "C27", "C28"],
      },
      {
        name: "Manufacture of low carbon technologies for transport",
        value: "ManufactureOfLowCarbonTechnologiesForTransport",
        key: "3.3",
        sector: "Manufacturing",
        type: "child",
        naceCodes: ["C29.1", "C30.1", "C30.2", "C30.9", "C33.15", "C33.17"],
      },
      {
        name: "Manufacture of batteries",
        value: "ManufactureOfBatteries",
        key: "3.4",
        sector: "Manufacturing",
        type: "child",
        naceCodes: ["C27.2", "E38.32"],
      },
      {
        name: "Manufacture of energy efficiency equipment for buildings",
        value: "ManufactureOfEnergyEfficiencyEquipmentForBuildings",
        key: "3.5",
        sector: "Manufacturing",
        type: "child",
        naceCodes: [
          "C16.23",
          "C23.11",
          "C23.20",
          "C23.31",
          "C23.32",
          "C23.43",
          "C23.61",
          "C25.11",
          "C25.12",
          "C25.21",
          "C25.29",
          "C25.93",
          "C27.31",
          "C27.32",
          "C27.33",
          "C27.40",
          "C27.51",
          "C28.11",
          "C28.12",
          "C28.13",
          "C28.14",
        ],
      },
      {
        name: "Manufacture of other low carbon technologies",
        value: "ManufactureOfOtherLowCarbonTechnologies",
        key: "3.6",
        sector: "Manufacturing",
        type: "child",
        naceCodes: ["C22", "C25", "C26", "C27", "C28"],
      },
      {
        name: "Manufacture of cement",
        value: "ManufactureOfCement",
        key: "3.7",
        sector: "Manufacturing",
        type: "child",
        naceCodes: ["C23.51"],
      },
      {
        name: "Manufacture of aluminium",
        value: "ManufactureOfAluminium",
        key: "3.8",
        sector: "Manufacturing",
        type: "child",
        naceCodes: ["C24.42", "C24.53"],
      },
      {
        name: "Manufacture of iron and steel",
        value: "ManufactureOfIronAndSteel",
        key: "3.9",
        sector: "Manufacturing",
        type: "child",
        naceCodes: ["C24.10", "C24.20", "C24.31", "C24.32", "C24.33", "C24.34", "C24.51", "C24.52"],
      },
      {
        name: "Manufacture of hydrogen",
        value: "ManufactureOfHydrogen",
        key: "3.10",
        sector: "Manufacturing",
        type: "child",
        naceCodes: ["C20.11"],
      },
      {
        name: "Manufacture of carbon black",
        value: "ManufactureOfCarbonBlack",
        key: "3.11",
        sector: "Manufacturing",
        type: "child",
        naceCodes: ["C20.13"],
      },
      {
        name: "Manufacture of soda ash",
        value: "ManufactureOfSodaAsh",
        key: "3.12",
        sector: "Manufacturing",
        type: "child",
        naceCodes: ["C20.13"],
      },
      {
        name: "Manufacture of chlorine",
        value: "ManufactureOfChlorine",
        key: "3.13",
        sector: "Manufacturing",
        type: "child",
        naceCodes: ["C20.13"],
      },
      {
        name: "Manufacture of organic basic chemicals",
        value: "ManufactureOfOrganicBasicChemicals",
        key: "3.14",
        sector: "Manufacturing",
        type: "child",
        naceCodes: ["C20.14"],
      },
      {
        name: "Manufacture of anhydrous ammonia",
        value: "ManufactureOfAnhydrousAmmonia",
        key: "3.15",
        sector: "Manufacturing",
        type: "child",
        naceCodes: ["C20.15"],
      },
      {
        name: "Manufacture of nitric acid",
        value: "ManufactureOfNitricAcid",
        key: "3.16",
        sector: "Manufacturing",
        type: "child",
        naceCodes: ["C20.15"],
      },
      {
        name: "Manufacture of plastics in primary form",
        value: "ManufactureOfPlasticsInPrimaryForm",
        key: "3.17",
        sector: "Manufacturing",
        type: "child",
        naceCodes: ["C20.16"],
      },
    ],
  },
  {
    name: "Energy",
    key: "4",
    sector: "Energy",
    type: "header",
    children: [
      {
        name: "Electricity generation using solar photovoltaic technology",
        value: "ElectricityGenerationUsingSolarPhotovoltaicTechnology",
        key: "4.1",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.11", "F42.22"],
      },
      {
        name: "Electricity generation using concentrated solar power (CSP) technology",
        value: "ElectricityGenerationUsingConcentratedSolarPowerCspTechnology",
        key: "4.2",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.11", "F42.22"],
      },
      {
        name: "Electricity generation from wind power",
        value: "ElectricityGenerationFromWindPower",
        key: "4.3",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.11", "F42.22"],
      },
      {
        name: "Electricity generation from ocean energy technologies",
        value: "ElectricityGenerationFromOceanEnergyTechnologies",
        key: "4.4",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.11", "F42.22"],
      },
      {
        name: "Electricity generation from hydropower",
        value: "ElectricityGenerationFromHydropower",
        key: "4.5",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.11", "F42.22"],
      },
      {
        name: "Electricity generation from geothermal energy",
        value: "ElectricityGenerationFromGeothermalEnergy",
        key: "4.6",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.11", "F42.22"],
      },
      {
        name: "Electricity generation from renewable non-fossil gaseous and liquid fuels",
        value: "ElectricityGenerationFromRenewableNonFossilGaseousAndLiquidFuels",
        key: "4.7",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.11", "F42.22"],
      },
      {
        name: "Electricity generation from bioenergy",
        value: "ElectricityGenerationFromBioenergy",
        key: "4.8",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.11"],
      },
      {
        name: "Transmission and distribution of electricity",
        value: "TransmissionAndDistributionOfElectricity",
        key: "4.9",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.12", "D35.13"],
      },
      {
        name: "Storage of electricity",
        value: "StorageOfElectricity",
        key: "4.10",
        sector: "Energy",
        type: "child",
      },
      {
        name: "Storage of thermal energy",
        value: "StorageOfThermalEnergy",
        key: "4.11",
        sector: "Energy",
        type: "child",
      },
      {
        name: "Storage of hydrogen",
        value: "StorageOfHydrogen",
        key: "4.12",
        sector: "Energy",
        type: "child",
      },
      {
        name: "Manufacture of biogas and biofuels for use in transport and of bioliquids",
        value: "ManufactureOfBiogasAndBiofuelsForUseInTransportAndOfBioliquids",
        key: "4.13",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.21"],
      },
      {
        name: "Transmission and distribution networks for renewable and low-carbon gases",
        value: "TransmissionAndDistributionNetworksForRenewableAndLowCarbonGases",
        key: "4.14",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.22", "F42.21", "H49.50"],
      },
      {
        name: "District heating/cooling distribution",
        value: "DistrictHeatingCoolingDistribution",
        key: "4.15",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.30"],
      },
      {
        name: "Installation and operation of electric heat pumps",
        value: "InstallationAndOperationOfElectricHeatPumps",
        key: "4.16",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.30", "F43.22"],
      },
      {
        name: "Cogeneration of heat/cool and power from solar energy",
        value: "CogenerationOfHeatCoolAndPowerFromSolarEnergy",
        key: "4.17",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.11", "D35.30"],
      },
      {
        name: "Cogeneration of heat/cool and power from geothermal energy",
        value: "CogenerationOfHeatCoolAndPowerFromGeothermalEnergy",
        key: "4.18",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.11", "D35.30"],
      },
      {
        name: "Cogeneration of heat/cool and power from renewable non-fossil gaseous and liquid fuels",
        value: "CogenerationOfHeatCoolAndPowerFromRenewableNonFossilGaseousAndLiquidFuels",
        key: "4.19",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.11", "D35.30"],
      },
      {
        name: "Cogeneration of heat/cool and power from bioenergy",
        value: "CogenerationOfHeatCoolAndPowerFromBioenergy",
        key: "4.20",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.11", "D35.30"],
      },
      {
        name: "Production of heat/cool from solar thermal heating",
        value: "ProductionOfHeatCoolFromSolarThermalHeating",
        key: "4.21",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.30"],
      },
      {
        name: "Production of heat/cool from geothermal energy",
        value: "ProductionOfHeatCoolFromGeothermalEnergy",
        key: "4.22",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.30"],
      },
      {
        name: "Production of heat/cool from renewable non-fossil gaseous and liquid fuels",
        value: "ProductionOfHeatCoolFromRenewableNonFossilGaseousAndLiquidFuels",
        key: "4.23",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.30"],
      },
      {
        name: "Production of heat/cool from bioenergy",
        value: "ProductionOfHeatCoolFromBioenergy",
        key: "4.24",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.30"],
      },
      {
        name: "Production of heat/cool using waste heat",
        value: "ProductionOfHeatCoolUsingWasteHeat",
        key: "4.25",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.30"],
      },
      {
        name: "Pre-commercial stages of advanced technologies to produce energy from nuclear processes with minimal waste from the fuel cycle",
        value:
          "PreCommercialStagesOfAdvancedTechnologiesToProduceEnergyFromNuclearProcessesWithMinimalWasteFromTheFuelCycle",
        key: "4.26",
        sector: "Energy",
        type: "child",
        naceCodes: ["M72", "M72.1"],
      },
      {
        name: "Construction and safe operation of new nuclear power plants, for the generation of electricity and/or heat, including for hydrogen production, using best-available technologies",
        value:
          "ConstructionAndSafeOperationOfNewNuclearPowerPlantsForTheGenerationOfElectricityAndOrHeatIncludingForHydrogenProductionUsingBestAvailableTechnologies",
        key: "4.27",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.11", "F42.22"],
      },
      {
        name: "Electricity generation from nuclear energy in existing installations",
        value: "ElectricityGenerationFromNuclearEnergyInExistingInstallations",
        key: "4.28",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.11", "F42.22"],
      },
      {
        name: "Electricity generation from fossil gaseous fuels",
        value: "ElectricityGenerationFromFossilGaseousFuels",
        key: "4.29",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.11", "F42.22"],
      },
      {
        name: "High-efficiency co-generation of heat/cool and power from fossil gaseous fuels",
        value: "HighEfficiencyCoGenerationOfHeatCoolAndPowerFromFossilGaseousFuels",
        key: "4.30",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.11", "D35.30"],
      },
      {
        name: "Production of heat/cool from fossil gaseous fuels in an efficient district heating and cooling system",
        value: "ProductionOfHeatCoolFromFossilGaseousFuelsInAnEfficientDistrictHeatingAndCoolingSystem",
        key: "4.31",
        sector: "Energy",
        type: "child",
        naceCodes: ["D35.30"],
      },
    ],
  },
  {
    name: "Water supply, sewerage, waste management and remediation",
    key: "5",
    sector: "Water supply, sewerage, waste management and remediation",
    type: "header",
    children: [
      {
        name: "Construction, extension and operation of water collection, treatment and supply systems",
        value: "ConstructionExtensionAndOperationOfWaterCollectionTreatmentAndSupplySystems",
        key: "5.1",
        sector: "Water supply, sewerage, waste management and remediation",
        type: "child",
        naceCodes: ["E36.00", "F42.99"],
      },
      {
        name: "Renewal of water collection, treatment and supply systems",
        value: "RenewalOfWaterCollectionTreatmentAndSupplySystems",
        key: "5.2",
        sector: "Water supply, sewerage, waste management and remediation",
        type: "child",
        naceCodes: ["E36.00", "F42.99"],
      },
      {
        name: "Construction, extension and operation of waste water collection and treatment",
        value: "ConstructionExtensionAndOperationOfWasteWaterCollectionAndTreatment",
        key: "5.3",
        sector: "Water supply, sewerage, waste management and remediation",
        type: "child",
        naceCodes: ["E37.00", "F42.99"],
      },
      {
        name: "Renewal of waste water collection and treatment",
        value: "RenewalOfWasteWaterCollectionAndTreatment",
        key: "5.4",
        sector: "Water supply, sewerage, waste management and remediation",
        type: "child",
        naceCodes: ["E37.00"],
      },
      {
        name: "Collection and transport of non-hazardous waste in source segregated fractions",
        value: "CollectionAndTransportOfNonHazardousWasteInSourceSegregatedFractions",
        key: "5.5",
        sector: "Water supply, sewerage, waste management and remediation",
        type: "child",
        naceCodes: ["E38.11"],
      },
      {
        name: "Anaerobic digestion of sewage sludge",
        value: "AnaerobicDigestionOfSewageSludge",
        key: "5.6",
        sector: "Water supply, sewerage, waste management and remediation",
        type: "child",
        naceCodes: ["E37.00", "F42.99"],
      },
      {
        name: "Anaerobic digestion of bio-waste",
        value: "AnaerobicDigestionOfBioWaste",
        key: "5.7",
        sector: "Water supply, sewerage, waste management and remediation",
        type: "child",
        naceCodes: ["E38.21", "F42.99"],
      },
      {
        name: "Composting of bio-waste",
        value: "CompostingOfBioWaste",
        key: "5.8",
        sector: "Water supply, sewerage, waste management and remediation",
        type: "child",
        naceCodes: ["E38.21", "F42.99"],
      },
      {
        name: "Material recovery from non-hazardous waste",
        value: "MaterialRecoveryFromNonHazardousWaste",
        key: "5.9",
        sector: "Water supply, sewerage, waste management and remediation",
        type: "child",
        naceCodes: ["E38.32", "F42.99"],
      },
      {
        name: "Landfill gas capture and utilisation",
        value: "LandfillGasCaptureAndUtilisation",
        key: "5.10",
        sector: "Water supply, sewerage, waste management and remediation",
        type: "child",
        naceCodes: ["E38.21"],
      },
      {
        name: "Transport of CO2",
        value: "TransportOfCo2",
        key: "5.11",
        sector: "Water supply, sewerage, waste management and remediation",
        type: "child",
        naceCodes: ["F42.21", "H49.50"],
      },
      {
        name: "Underground permanent geological storage of CO2",
        value: "UndergroundPermanentGeologicalStorageOfCo2",
        key: "5.12",
        sector: "Water supply, sewerage, waste management and remediation",
        type: "child",
        naceCodes: ["E39.00"],
      },
    ],
  },
  {
    name: "Transport",
    key: "6",
    sector: "Transport",
    type: "header",
    children: [
      {
        name: "Passenger interurban rail transport",
        value: "PassengerInterurbanRailTransport",
        key: "6.1",
        sector: "Transport",
        type: "child",
        naceCodes: ["H49.10", "N77.39"],
      },
      {
        name: "Freight rail transport",
        value: "FreightRailTransport",
        key: "6.2",
        sector: "Transport",
        type: "child",
        naceCodes: ["H49.20", "N77.39"],
      },
      {
        name: "Urban and suburban transport, road passenger transport",
        value: "UrbanAndSuburbanTransportRoadPassengerTransport",
        key: "6.3",
        sector: "Transport",
        type: "child",
        naceCodes: ["H49.31", "H49.3.9", "N77.39", "N77.11"],
      },
      {
        name: "Operation of personal mobility devices, cycle logistics",
        value: "OperationOfPersonalMobilityDevicesCycleLogistics",
        key: "6.4",
        sector: "Transport",
        type: "child",
        naceCodes: ["N77.11", "N77.21"],
      },
      {
        name: "Transport by motorbikes, passenger cars and light commercial vehicles",
        value: "TransportByMotorbikesPassengerCarsAndLightCommercialVehicles",
        key: "6.5",
        sector: "Transport",
        type: "child",
        naceCodes: ["H49.32", "H49.39", "N77.11"],
      },
      {
        name: "Freight transport services by road",
        value: "FreightTransportServicesByRoad",
        key: "6.6",
        sector: "Transport",
        type: "child",
        naceCodes: ["H49.4.1", "H53.10", "H53.20", "N77.12"],
      },
      {
        name: "Inland passenger water transport",
        value: "InlandPassengerWaterTransport",
        key: "6.7",
        sector: "Transport",
        type: "child",
        naceCodes: ["H50.30"],
      },
      {
        name: "Inland freight water transport",
        value: "InlandFreightWaterTransport",
        key: "6.8",
        sector: "Transport",
        type: "child",
        naceCodes: ["H50.4"],
      },
      {
        name: "Retrofitting of inland water passenger and freight transport",
        value: "RetrofittingOfInlandWaterPassengerAndFreightTransport",
        key: "6.9",
        sector: "Transport",
        type: "child",
        naceCodes: ["H50.4", "H50.30", "C33.15"],
      },
      {
        name: "Sea and coastal freight water transport, vessels for port operations and auxiliary activities",
        value: "SeaAndCoastalFreightWaterTransportVesselsForPortOperationsAndAuxiliaryActivities",
        key: "6.10",
        sector: "Transport",
        type: "child",
        naceCodes: ["H50.2", "H52.22", "N77.34"],
      },
      {
        name: "Sea and coastal passenger water transport",
        value: "SeaAndCoastalPassengerWaterTransport",
        key: "6.11",
        sector: "Transport",
        type: "child",
        naceCodes: ["H50.10", "N77.21", "N77.34"],
      },
      {
        name: "Retrofitting of sea and coastal freight and passenger water transport",
        value: "RetrofittingOfSeaAndCoastalFreightAndPassengerWaterTransport",
        key: "6.12",
        sector: "Transport",
        type: "child",
        naceCodes: ["H50.10", "H50.2", "H52.22", "C33.15", "N77.21"],
      },
      {
        name: "Infrastructure for personal mobility, cycle logistics",
        value: "InfrastructureForPersonalMobilityCycleLogistics",
        key: "6.13",
        sector: "Transport",
        type: "child",
        naceCodes: ["F42.11", "F42.12", "F42.13", "F43.21", "F711", "F71.20"],
      },
      {
        name: "Infrastructure for rail transport",
        value: "InfrastructureForRailTransport",
        key: "6.14",
        sector: "Transport",
        type: "child",
        naceCodes: ["F42.12", "F42.13", "M71.12", "M71.20", "F43.21", "H52.21"],
      },
      {
        name: "Infrastructure enabling low-carbon road transport and public transport",
        value: "InfrastructureEnablingLowCarbonRoadTransportAndPublicTransport",
        key: "6.15",
        sector: "Transport",
        type: "child",
        naceCodes: ["F42.11", "F42.13", "F71.1", "F71.20"],
      },
      {
        name: "Infrastructure enabling low carbon water transport",
        value: "InfrastructureEnablingLowCarbonWaterTransport",
        key: "6.16",
        sector: "Transport",
        type: "child",
        naceCodes: ["F42.91", "F71.1", "F71.20"],
      },
      {
        name: "Low carbon airport infrastructure",
        value: "LowCarbonAirportInfrastructure",
        key: "6.17",
        sector: "Transport",
        type: "child",
        naceCodes: ["F41.20", "F42.99"],
      },
      {
        name: "Infrastructure enabling road transport and public transport",
        value: "InfrastructureEnablingRoadTransportAndPublicTransport",
        key: "6.18",
        sector: "Transport",
        type: "child",
        naceCodes: ["F42.11", "F42.13", "F71.1", "F71.20"],
      },
      {
        name: "Infrastructure for water transport",
        value: "InfrastructureForWaterTransport",
        key: "6.19",
        sector: "Transport",
        type: "child",
        naceCodes: ["F42.91", "F71.1", "F71.20"],
      },
      {
        name: "Airport infrastructure",
        value: "AirportInfrastructure",
        key: "6.20",
        sector: "Transport",
        type: "child",
        naceCodes: ["F41.20", "F42.99"],
      },
    ],
  },
  {
    name: "Construction and real estate",
    key: "7",
    sector: "Construction and real estate",
    type: "header",
    children: [
      {
        name: "Construction of new buildings",
        value: "ConstructionOfNewBuildings",
        key: "7.1",
        sector: "Construction and real estate",
        type: "child",
        naceCodes: ["F41.1", "F41.2", "F43"],
      },
      {
        name: "Renovation of existing buildings",
        value: "RenovationOfExistingBuildings",
        key: "7.2",
        sector: "Construction and real estate",
        type: "child",
        naceCodes: ["F41", "F43"],
      },
      {
        name: "Installation, maintenance and repair of energy efficiency equipment",
        value: "InstallationMaintenanceAndRepairOfEnergyEfficiencyEquipment",
        key: "7.3",
        sector: "Construction and real estate",
        type: "child",
        naceCodes: ["F42", "F43", "M71", "C16", "C17", "C22", "C23", "C25", "C27", "C28", "S95.21", "S95.22", "C33.12"],
      },
      {
        name: "Installation, maintenance and repair of charging stations for electric vehicles in buildings (and parking spaces attached to buildings)",
        value:
          "InstallationMaintenanceAndRepairOfChargingStationsForElectricVehiclesInBuildingsAndParkingSpacesAttachedToBuildings",
        key: "7.4",
        sector: "Construction and real estate",
        type: "child",
        naceCodes: ["F42", "F43", "M71", "C16", "C17", "C22", "C23", "C25", "C27", "C28"],
      },
      {
        name: "Installation, maintenance and repair of instruments and devices for measuring, regulation and controlling energy performance of buildings",
        value:
          "InstallationMaintenanceAndRepairOfInstrumentsAndDevicesForMeasuringRegulationAndControllingEnergyPerformanceOfBuildings",
        key: "7.5",
        sector: "Construction and real estate",
        type: "child",
        naceCodes: ["F42", "F43", "M71", "C16", "C17", "C22", "C23", "C25", "C27", "C28"],
      },
      {
        name: "Installation, maintenance and repair of renewable energy technologies",
        value: "InstallationMaintenanceAndRepairOfRenewableEnergyTechnologies",
        key: "7.6",
        sector: "Construction and real estate",
        type: "child",
        naceCodes: ["F42", "F43", "M71", "C16", "C17", "C22", "C23", "C25", "C27", "C28"],
      },
      {
        name: "Acquisition and ownership of buildings",
        value: "AcquisitionAndOwnershipOfBuildings",
        key: "7.7",
        sector: "Construction and real estate",
        type: "child",
        naceCodes: ["L68"],
      },
    ],
  },
  {
    name: "Information and communication",
    key: "8",
    sector: "Information and communication",
    type: "header",
    children: [
      {
        name: "Data processing, hosting and related activities",
        value: "DataProcessingHostingAndRelatedActivities",
        key: "8.1",
        sector: "Information and communication",
        type: "child",
        naceCodes: ["J63.11"],
      },
      {
        name: "Data-driven solutions for GHG emissions reductions",
        value: "DataDrivenSolutionsForGhgEmissionsReductions",
        key: "8.2",
        sector: "Information and communication",
        type: "child",
        naceCodes: ["J61", "J62", "J63.11"],
      },
      {
        name: "Computer programming, consultancy and related activities",
        value: "ComputerProgrammingConsultancyAndRelatedActivities",
        key: "8.3",
        sector: "Information and communication",
        type: "child",
        naceCodes: ["J62"],
      },
      {
        name: "Programming and broadcasting activities",
        value: "ProgrammingAndBroadcastingActivities",
        key: "8.4",
        sector: "Information and communication",
        type: "child",
        naceCodes: ["J60"],
      },
    ],
  },
  {
    name: "Professional, scientific and technical activities",
    key: "9",
    sector: "Professional, scientific and technical activities",
    type: "header",
    children: [
      {
        name: "Close to market research, development and innovation",
        value: "CloseToMarketResearchDevelopmentAndInnovation",
        key: "9.1",
        sector: "Professional, scientific and technical activities",
        type: "child",
        naceCodes: ["M71.12", "M72.1"],
      },
      {
        name: "Research, development and innovation for direct air capture of CO2",
        value: "ResearchDevelopmentAndInnovationForDirectAirCaptureOfCo2",
        key: "9.2",
        sector: "Professional, scientific and technical activities",
        type: "child",
        naceCodes: ["M71.12", "M72.1"],
      },
      {
        name: "Professional services related to energy performance of buildings",
        value: "ProfessionalServicesRelatedToEnergyPerformanceOfBuildings",
        key: "9.3",
        sector: "Professional, scientific and technical activities",
        type: "child",
        naceCodes: ["M71"],
      },
      {
        name: "Engineering activities and related technical consultancy dedicated to adaptation to climate change",
        value: "EngineeringActivitiesAndRelatedTechnicalConsultancyDedicatedToAdaptationToClimateChange",
        key: "9.4",
        sector: "Professional, scientific and technical activities",
        type: "child",
        naceCodes: ["M71.12"],
      },
    ],
  },
  {
    name: "Financial and insurance activities",
    key: "10",
    sector: "Financial and insurance activities",
    type: "header",
    children: [
      {
        name: "Non-life insurance: underwriting of climate-related perils",
        value: "NonLifeInsuranceUnderwritingOfClimateRelatedPerils",
        key: "10.1",
        sector: "Financial and insurance activities",
        type: "child",
        naceCodes: ["K65.12"],
      },
      {
        name: "Reinsurance",
        value: "Reinsurance",
        key: "10.2",
        sector: "Financial and insurance activities",
        type: "child",
        naceCodes: ["K65.20"],
      },
    ],
  },
  {
    name: "Education",
    key: "11",
    sector: "Education",
    type: "header",
    children: [
      {
        name: "Education",
        value: "Education",
        key: "11.1",
        sector: "Education",
        type: "child",
        naceCodes: ["P85"],
      },
    ],
  },
  {
    name: "Human health and social work activities",
    key: "12",
    sector: "Human health and social work activities",
    type: "header",
    children: [
      {
        name: "Residential care activities",
        value: "ResidentialCareActivities",
        key: "12.1",
        sector: "Human health and social work activities",
        type: "child",
        naceCodes: ["Q87"],
      },
    ],
  },
  {
    name: "Arts, entertainment and recreation",
    key: "13",
    sector: "Arts, entertainment and recreation",
    type: "header",
    children: [
      {
        name: "Creative, arts and entertainment activities",
        value: "CreativeArtsAndEntertainmentActivities",
        key: "13.1",
        sector: "Arts, entertainment and recreation",
        type: "child",
        naceCodes: ["R90"],
      },
      {
        name: "Libraries, archives, museums and cultural activities",
        value: "LibrariesArchivesMuseumsAndCulturalActivities",
        key: "13.2",
        sector: "Arts, entertainment and recreation",
        type: "child",
        naceCodes: ["R91"],
      },
      {
        name: "Motion picture, video and television programme production, sound recording and music publishing activities",
        value: "MotionPictureVideoAndTelevisionProgrammeProductionSoundRecordingAndMusicPublishingActivities",
        key: "13.3",
        sector: "Arts, entertainment and recreation",
        type: "child",
        naceCodes: ["J59"],
      },
    ],
  },
];
