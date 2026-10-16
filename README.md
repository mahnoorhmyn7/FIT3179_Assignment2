# Wildlife, Beyond the Zoo

**FIT3179 Data Visualisation 2**  
**Student:** Mahnoor Humayun  
**Student ID:** 35533218  
**Live site:** https://mahnoorhmyn7.github.io/FIT3179_Assignment2/

An interactive data investigation into selected Australian zoo conservation programs, using **eight Vega-Lite visualisations**: proportional-symbol map, donut, stacked bars, lollipop plot, dumbbell plot, matrix heatmap, bubble matrix, and dot plot.

## Data and methodology

The data include six selected zoo/sanctuary sites, thirteen manually curated program examples, and five separately published conservation release figures. Original sources are linked from `data/programs.csv` and `data/outcomes.csv` and acknowledged on the website.

The records are a purposive sample, not a comprehensive census. Activity flags indicate what is documented in the cited material; missing flags do not prove the absence of an activity. Reported cumulative animal-release figures have different reporting periods and are not standardised institutional performance metrics.

## Files

- `index.html` — self-contained web page, styling, embedded chart code and narrative
- `style.css` — styling and responsiveness
- `js/vega_lite_vis.js` — Vega-Lite embeds and dataset-backed specifications
- `js/specs/` — eight independently inspectable Vega-Lite JSON specifications
- `data/` — source CSV files and Australian outline (GeoJSON)

**Libraries:** Vega 5, Vega-Lite 5, Vega-Embed 6 via jsDelivr. GitHub Pages deploys from `main` / root.


## Rendering reliability
Charts use Vega-Lite in-browser; the repository also includes static SVG previews under `assets/` so a browser network or rendering failure does not leave empty panels. If a preview appears instead of a Vega chart, open browser developer tools > Console to see the specific Vega-Lite error.
