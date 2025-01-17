package org.dataland.datalandbackend.utils

import com.fasterxml.jackson.core.type.TypeReference
import com.fasterxml.jackson.databind.ObjectMapper
import org.dataland.datalandbackend.entities.StoredCompanyEntity
import org.dataland.datalandbackend.model.CompanyInformation
import org.dataland.datalandbackend.model.enums.company.IdentifierType
import org.dataland.datalandbackend.model.eutaxonomy.nonfinancials.EuTaxonomyDataForNonFinancials
import org.springframework.beans.factory.annotation.Autowired
import java.io.File

class TestDataProvider(@Autowired var objectMapper: ObjectMapper) {
    private val jsonFile = File("./build/resources/test/CompanyInformationWithEuTaxonomyDataForNonFinancials.json")
    private val testCompanyInformationWithEuTaxonomyData =
        objectMapper.readValue(
            jsonFile,
            object : TypeReference<List<CompanyInformationWithData<EuTaxonomyDataForNonFinancials>>>() {},
        )

    fun getCompanyInformation(requiredQuantity: Int): List<CompanyInformation> {
        return testCompanyInformationWithEuTaxonomyData.slice(0 until requiredQuantity).map { it.companyInformation }
    }

    fun getCompanyInformationWithoutIdentifiers(requiredQuantity: Int): List<CompanyInformation> {
        return getCompanyInformation(requiredQuantity)
            .map { it.copy(identifiers = IdentifierType.values().associateWith { emptyList() }) }
    }

    fun getEuTaxonomyForNonFinancialsDataset(): EuTaxonomyDataForNonFinancials {
        return testCompanyInformationWithEuTaxonomyData.first().t
    }

    fun getEmptyStoredCompanyEntity(): StoredCompanyEntity {
        return StoredCompanyEntity(
            "",
            "",
            null,
            null,
            "",
            null,
            "",
            mutableListOf(),
            mutableListOf(),
            "",
            false,
            null,
        )
    }
}
