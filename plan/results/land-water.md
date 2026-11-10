---
sidebar_position: 2
description: Model results for land and water
---

import MiniPortal from '@site/src/components/MiniPortal';

# Land and Water

export const mp29Scenarios = [[34, "A"], [38, "B"]];

The results below describe how the distribution and physical characteristics of land and water may change over time under MP29 Scenarios A and B. Land Type (plus water depth) shows the spatial distribution of land types and water classes for a given year. Land Change shows historic changes prior to 2029 and where the model predicts land will persist, be gained, or be lost from 2029 through 2079.

## Land Type (Plus) {/* #land-type-plus */}

Land Type (Plus) shows annual classifications of vegetated land, bare (unvegetated) ground, flotant marsh, upland/developed areas (not modeled), and open water. MP29 adds a shallow vs. deep classification for open water. At a given location, these classifications can change from year to year based on modeled dynamics involving hydrology, sediment deposition, vegetation, habitat type, accretion elevation, salinity, and inundation.

<MiniPortal
  title="Land Type Plus"
  analysis="lnd_type_plus"
  variable="lnd_type"
  grid="morph_pixel_v002"
  time_unit="annual"
  model_group_id={706}
  scenario_id={mp29Scenarios}
  calendar_year={2079}
  geography="-90.24804,29.55313"
  map="7.56/29.57/-91.11"
/>

Maps of Land Type (Plus) show the spatial distribution of land types and water classes, while time series summarize transitions among land types and water depth classes at a specific location. For example, an area could transition from vegetated wetland to bare ground and then to open water, or it could remain open water while becoming shallower or deeper.

:::caution

PLACEHOLDER

:::

## Land Change

Land Change describes modeled outcomes related to the amount and distribution of land (and water) over time compared to initial conditions (i.e., modeled conditions representing the year 2029). It is calculated from annual ICM outputs for landscape condition, elevation, hydrology, vegetation, and land and water classification. To determine change, results for a given future year are compared with initial conditions to estimate land gain, land loss, and net change. For FWOA, the output is a two-digit code for each location, with the first digit representing classification for initial conditions and the second digit representing classification for a future year of interest. Results from these outputs, summarized into land loss or land gain, can be explored by year, scenario, basin, region, or other geographic area.

<MiniPortal
  title="Land Change"
  analysis="lnd_chng"
  variable="lnd_type"
  grid="morph_pixel_v002"
  time_unit="annual"
  model_group_id={706}
  scenario_id={mp29Scenarios}
  calendar_year={2079}
  geography="-90.24804,29.55313,-91.7945,29.51108,-93.02126,29.80827"
  map="7.56/29.57/-91.11"
/>

Maps show where land persists and where it is gained or lost, while time series summarize the direction, amount, and rate of change. Areas with similar net changes in land area may have different spatial patterns, such as concentrated land loss in one area and dispersed fragmentation in another. Land Type does not capture every type of landscape change. An area can remain land while shifting among vegetated habitat types, for example from forested wetlands to marsh or bare ground. The [Vegetation](./vegetation-habitat.md#vegetation) outputs below capture these changes.

### Primary Data Sources

- MP29 initial conditions land types and water depths
- Digital elevation model, built from topography and bathymetry data
- ICM-Hydro outputs
- ICM Louisiana Vegetation Model (ICM-LAVegMod) outputs
- Subsidence surfaces derived from benchmark observations
- Assumed rates for Organic Matter Accumulation and Shallow Surface Factor (SSF), derived from Coastwide Reference Monitoring System (CRMS) observations
