---
sidebar_position: 1.5
description: MP29 confidence-weighted land/water and land change results
---

import MiniPortal from '@site/src/components/MiniPortal';

# MP29 Confidence-Weighting

Confidence-weighted metrics are new for MP29. They show how consistently the model identifies a location as land (including vegetated wetlands, bare ground, and flotant, or floating, marsh) or water (shallow or deep) across five sea level rise scenarios, including MP29 Scenarios A and B. The rates for these scenarios represent 5th to 95th percentile projections based on “middle-of-the-road” climate assumptions (i.e., Coupled Model Intercomparison Project Phase 6 [CMIP6] scenario SSP2-4.5). The more consistent the results, the higher the confidence that modeled coastal change at that location will follow a similar pattern across the range of sea level rise rates evaluated.

## Confidence-Weighted Land/Water {/* #confidence-weighted-land-water */}

For the confidence-weighted land/water (or “Land Confidence”) metric, map values show the degree of agreement among the five scenarios evaluated for a given year. Values near either end of the scale show stronger agreement toward land (maximum agreement = 1) or toward water (maximum agreement = 0). Values near the middle show less agreement, which means more uncertainty and greater sensitivity to sea level rise assumptions. These outputs complement the [scenario-specific land and water outputs](./land-water.md) described further below by adding context about the confidence, or certainty, of results given “middle-of-the-road” climate assumptions.

<MiniPortal
  title="Land Confidence"
  analysis="lnd_conf"
  variable="lnd_type"
  grid="morph_pixel_v002"
  time_unit="annual"
  model_group_id={706}
  calendar_year={2079}
  geography="-90.22243,29.13566,-91.26478,29.32119,-92.83394,29.69453"
  map="7.55/29.64/-91.31"
/>

## Confidence-Weighted Land Change {/* #confidence-weighted-land-change */}

The Confidence-weighted Land Change (CWLC) metric compares confidence-weighted land/water for a given future year with initial conditions (i.e., modeled conditions representing the year 2029) to show confidence in land change over time. For example, an area may be predicted to be land in every evaluated scenario for initial conditions and water in every evaluated scenario in a future year. In that case, confidence in land loss is high. Another area might have less confidence in land/water in the future year, which means less confidence in how that area could change over time.

<MiniPortal
  title="Land Confidence Change"
  analysis="lnd_conf_chng"
  variable="lnd_type"
  grid="morph_pixel_v002"
  time_unit="annual"
  model_group_id={706}
  calendar_year={2079}
  geography="-90.22243,29.13566,-91.26478,29.32119,-92.83394,29.69453"
  map="7.55/29.64/-91.31"
/>

### Primary Data Sources

- MP29 initial conditions land and water output
- MP29 FWOA annual land and water output
- Regional CMIP6 SSP2-4.5 5th to 95th percentile projections for sea level rise
- Percentile-based confidence-weighting factors
