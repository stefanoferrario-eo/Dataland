package org.dataland.datalandbackend.model.p2p.categories.livestockFarming.subcategories

import java.math.BigDecimal

/**
* --- API model ---
* Fields of the P2P questionnaire regarding the energy of the livestock farming sector
*/
data class P2pLivestockFarmingEnergy(
    val renewableElectricityPercentage: BigDecimal? = null,

    val renewableHeatingPercentage: BigDecimal? = null,

    val electricGasPoweredMachineryVehiclePercentage: BigDecimal? = null,
)
