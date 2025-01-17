package org.dataland.datalandbackend.model.p2p.categories.cement

import org.dataland.datalandbackend.model.p2p.categories.cement.subcategories.P2pCementEnergy
import org.dataland.datalandbackend.model.p2p.categories.cement.subcategories.P2pCementMaterial
import org.dataland.datalandbackend.model.p2p.categories.cement.subcategories.P2pCementTechnology

/**
* --- API model ---
* Fields of the P2P questionnaire regarding the cement sector
*/
data class P2pCement(
    val energy: P2pCementEnergy? = null,

    val technology: P2pCementTechnology? = null,

    val material: P2pCementMaterial? = null,
)
