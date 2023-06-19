import { DataSearchStoredCompany } from "@/utils/SearchCompaniesForFrameworkDataPageDataRequester";
import {
  CompanyIdentifier,
  CompanyIdentifierIdentifierTypeEnum,
  CompanyInformation,
  DataMetaInformation,
  DataTypeEnum,
  QaStatus,
} from "@clients/backend";

/**
 * Method to prepare an array consisting of one simple dataset to be displayed in the data table of the "AVAILABLE
 * DATASETS" page
 * @returns The dummy dataSearchStoredCompany instance as an array with one entry
 */
export function prepareSimpleDataSearchStoredCompanyArray(): DataSearchStoredCompany[] {
  const mockCompanyInformation = {
    companyName: "testCompany",
    headquarters: "testHeadquarters",
    sector: "testSector",
    identifiers: [
      {
        identifierType: CompanyIdentifierIdentifierTypeEnum.PermId,
        identifierValue: "testPermId",
      },
    ] as Array<CompanyIdentifier>,
    countryCode: "DE",
  } as CompanyInformation;

  const mockDataMetaInformation = {
    dataId: "testDataId",
    companyId: "testCompanyId",
    dataType: DataTypeEnum.Lksg,
    uploadTime: 1672527600000, // 1.1.2023 00:00:00:0000
    reportingPeriod: "2023",
    currentlyActive: true,
    qaStatus: QaStatus.Accepted,
  } as DataMetaInformation;

  return [
    {
      companyName: mockCompanyInformation.companyName,
      companyInformation: mockCompanyInformation,
      companyId: mockDataMetaInformation.companyId,
      permId: mockCompanyInformation.identifiers[0].identifierValue,
      dataRegisteredByDataland: [mockDataMetaInformation],
    },
  ];
}