---
sidebar_position: 4
description: Components of the Integrated Compartment Model (ICM) and their outputs
---

# ICM Components

The ICM produces MP29 FWOA landscape results. Its linked components represent hydrology and salinity, wetland morphology and land change, vegetation, and habitat or ecological metrics. The components exchange information during annual simulations. Water levels and salinity can affect vegetation, which can affect organic matter accumulation. Changes in elevation and inundation can then affect the distribution of land and water.

_Table 3. Overview of ICM components, primary functions, and representative outputs._

| Model component | Primary function | Representative outputs |
| --- | --- | --- |
| Hydrology and salinity | Simulates water movement, water levels, salinity, and related boundary conditions. | Water levels, salinity, tidal products, and hydrologic forcing products. |
| Morphology and land change | Simulates sediment deposition, organic matter accumulation, subsidence, elevation change, inundation response, and land-water transitions. | Elevation, land gain, land loss, and [land-water maps](../results/land-water.md). |
| Vegetation | Simulates species mortality, establishment, dispersal, and changes in cover in response to environmental conditions. | Annual vegetation maps, species distributions, [Vegetation Community Type](../results/vegetation-habitat.md#vegetation-community-type-vct), and [FFIBS](../results/vegetation-habitat.md#ffibs). |
| Habitat and ecological metrics | Translates landscape and vegetation outputs into habitat, diversity, and ecological evaluation products. | Habitat maps, [Habitat Diversity Index](../results/vegetation-habitat.md#icm-habitat-diversity-index-icm-hdi) values, [Wetland Value Assessment](../results/vegetation-habitat.md#icm-wetland-value-assessments-icm-wvas) metrics, and related summaries. |

The other MP29 models, ADCIRC and SWAN, rely on ICM landscape outputs and assumptions about sea level rise and other conditions to estimate storm surge and waves and describe the physical flood hazard. CLARA uses the modeled flooding and information about exposed structures to estimate flood risk.
