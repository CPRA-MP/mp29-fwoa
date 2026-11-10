// d3 7.9.2 declares `"sideEffects": false`, so when Mermaid imports only
// `select` from "d3" the bundler drops d3-transition -- and with it the patch
// that adds `selection.prototype.transition`. Mermaid's flowchart tooltips then
// throw "tooltipElem.transition is not a function" on hover. Importing it here
// keeps the patch in the bundle (d3-transition itself is `sideEffects: true`).
import "d3-transition";
