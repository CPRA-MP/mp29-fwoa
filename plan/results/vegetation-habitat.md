---
sidebar_position: 3
description: Model results for vegetation and habitat quality
---

import MiniPortal from '@site/src/components/MiniPortal';

# Vegetation & Habitat

## Vegetation

Vegetation results describe how plant communities across Louisiana’s coastal landscape may change over time in response to modeled conditions such as salinity, water levels, inundation, elevation, and distribution of land and water. This section presents two ways to classify vegetation data into habitat types: by FFIBS (Forested, Fresh, Intermediate, Brackish, and Saline) score and by Vegetation Community Type (VCT).

### FFIBS

FFIBS habitat types classify vegetated land along a continuous gradient, from forested through saline-associated communities, based on the composition of vegetation. FFIBS categories are determined annually from ICM-LAVegMod species cover outputs. Each modeled species receives a numeric score from 0 (species that prefer the freshest conditions) to 24 (species that prefer the most saline conditions), and cover-weighted averages are then calculated at each modeled location. The weighted averages determine the habitat type: fresh forested, fresh marsh, intermediate marsh, brackish marsh, or saline marsh. Because FFIBS is a vegetation-based metric, it should not be interpreted as a direct reflection of salinity.

<MiniPortal
  title="FFIBS"
  variable="ffibs_score"
  grid="veg_grid_cell_v002"
  time_unit="annual"
  model_group_id={706}
  scenario_id={[[34, "A"], [38, "B"]]}
  geography="-91.01385,29.41441,-92.77441,29.72377,-89.42494,29.24865"
  map="7.55/29.74/-91.25"
/>

FFIBS values are used in the wetland morphology subroutine of the ICM to estimate organic matter accumulation, linking vegetation composition with modeled wetland elevation processes. Year-to-year changes in FFIBS show vegetation transitions toward new habitat types, which can influence elevation and, in turn, shifts in land and water.

#### Primary Data Sources

- Annual species-cover outputs from ICM-LAVegMod
- CRMS vegetation observations
- FFIBS species score tables

<details>
<summary>Dig Deeper</summary>

ICM-LAVegMod updates vegetation coverage annually using modeled output for salinity and water level and assumed rates of mortality, establishment, and dispersal.

</details>

### Vegetation Community Type (VCT) {/* #vegetation-community-type-vct */}

:::note

This metric is not available yet for MP29 but will be added in 2027. The map below is a placeholder showing 2023 Coastal Master Plan (MP23) results.

:::

Vegetation Community Type (VCT) describes modeled vegetation using 15 distinct communities, or mixtures of species, derived from analysis of CRMS data (Snedden, et al., 2019). Like FFIBS categories, VCT is derived annually from ICM-LAVegMod species cover outputs.

<MiniPortal
  title="VCT (MP23 placeholder)"
  variable="vct"
  grid="veg_grid_cell_v001"
  time_unit="annual"
  model_group_id={514}
  scenario_id={[[7, "MP23 Lower"], [8, "MP23 Higher"]]}
  geography="-93.61823,29.79669,-91.00036,29.21602,-89.74236,29.61531"
  map="7.11/29.65/-92.03"
/>

Maps show the spatial distribution of vegetation communities for a given year. A change in VCT from year to year indicates that modeled species composition has shifted enough to alter the assigned community. VCT output should be considered with FFIBS and related environmental outputs to better understand community transitions.

#### Primary Data Sources

- Sentinel-2 imagery and derived vegetation products
- CRMS vegetation observations
- Coastwide vegetation surveys
- ICM-Hydro outputs for salinity and water level
- ICM-Morph outputs
- Species assumptions derived from CRMS observations

## Habitat Quality

Several outputs are available to provide information related to the quality and value of coastal habitats. This section presents ICM-Habitat Suitability Indices, the ICM-Habitat Diversity Index, and ICM-Wetland Value Assessment, each of which evaluates a different aspect of habitat condition.

### ICM-Habitat Suitability Indices (ICM-HSIs) {/* #icm-habitat-suitability-indices-icm-hsis */}

The ICM-HSIs describe how suitable modeled conditions are for selected fish, shellfish, and wildlife species, sometimes by life stage. Scores range from 0 to 1, with higher values indicating more suitable modeled habitat for the species or life stage evaluated. Note that ICM-HSI values describe habitat conditions relative to known preferences of each species; they do not predict species presence or abundance.

:::note

ICM-HSIs are not yet available for MP29. The map below is a placeholder showing 2023 Coastal Master Plan (MP23) results.

:::

<MiniPortal
  title="HSI (MP23 placeholder)"
  variable="hsi"
  grid="veg_grid_cell_v001"
  time_unit="annual"
  model_group_id={500}
  scenario_id={[[7, "MP23 Lower"], [8, "MP23 Higher"]]}
  geography="-93.61823,29.79669,-91.00036,29.21602,-89.74236,29.61531"
  map="7.11/29.72/-91.48"
/>

Maps show the spatial distribution of ICM-HSI scores for a given species or life stage, in other words, where conditions are more or less suitable, while time series and summary graphics show changes in habitat suitability scores over time. ICM-HSI scores are relative for individual species or life stages but not necessarily comparable across models. The individual variables used to calculate an HSI can help identify which environmental or habitat conditions drive the results.

#### Primary Data Sources

- Species-specific data (e.g., Louisiana Department of Wildlife and Fisheries [LDWF] catch per unit effort, bald eagle aerial nest surveys, oyster cultch coverage)
- ICM-Hydro outputs
- ICM-Morph outputs
- ICM-LAVegMod outputs

### ICM-Habitat Diversity Index (ICM-HDI) {/* #icm-habitat-diversity-index-icm-hdi */}

The ICM-HDI, which is a new metric for MP29, describes the variety and distribution of modeled habitat types within a defined analysis area. Calculations apply Shannon’s Diversity Index to annual ICM habitat outputs, including habitat types and water depth classes (e.g., bottomland hardwood forest, swamp forest, intermediate marsh, brackish marsh, saline marsh, bare ground, shallow water, and deep water). These calculations measure habitat richness, or the number of habitat types present, and habitat evenness, or how evenly area is distributed among those types. Results are typically calculated for ecoregions and basins but can also be calculated coastwide and/or at smaller spatial scales.

:::note

Not yet available in the Master Plan Data Portal (MPDP).

:::

Time series show how habitat diversity changes over time for a given area of analysis. Higher values may reflect more habitat types, a more even distribution of habitat area, or both. Lower values may reflect fewer habitat types or greater dominance by a smaller number of types. Because the analysis area affects the patterns represented, ICM-HDI values should be compared at a consistent geographic scale. ICM-HDI results supplement land change information. To identify the changing conditions driving a trend, consider these results together with land change outputs and with outputs for the habitat types used in the calculation.

#### Primary Data Sources

- Habitat classifications derived from ICM outputs
- Habitat area summaries aggregated from ICM grid cell outputs

### ICM-Wetland Value Assessments (ICM-WVAs) {/* #icm-wetland-value-assessments-icm-wvas */}

The ICM-WVAs, which are new metrics for MP29, describe wetland habitat value by combining the area of a habitat type with established measures of condition defined for that habitat type. Separate measures are considered for fresh marsh, intermediate marsh, brackish marsh, saline marsh, swamp, and bottomland hardwood forests. Depending on the habitat type and available ICM outputs, these measures may be calculated directly from ICM outputs, estimated using related indicators, or held constant to avoid influencing results.

:::note

Not yet available in MPDP.

:::

ICM-WVA results include outputs for individual measures (where applicable), Habitat Suitability Index (HSI) values (see [ICM-Habitat Suitability Indices](#icm-habitat-suitability-indices-icm-hsis) above), Habitat Units, and time series summaries showing how these calculations change over time. Habitat Units combine HSI values and area to reflect the amount and quality of habitat. Reviewing the component measures can help identify the factors driving trends.

#### Primary Data Sources

- Vegetation coverage and composition
- Submerged aquatic vegetation coverage
- Marsh edge and interspersion metrics
- Water Depth outputs, including area of shallow water
- Salinity outputs
- Water regime and forest structure calculations for forested wetlands
- Habitat area calculations
