# FIT3179 Data Visualisation 2 — Beyond the Enclosures

An interactive data story about conservation work by selected Australian zoos.

## How to run

1. Place **all files and folders in this ZIP** into your existing `FIT3179_Assignment2` repository folder. Replace the old `index.html`.
2. In VS Code, install **Live Server** if needed. Right-click `index.html` → **Open with Live Server**.
3. Confirm that the map, conservation program matrix and release chart load. An internet connection is required for the Vega/Vega-Lite CDN scripts and Google Fonts.
4. In **Source Control**, stage all changes, commit e.g. `Add interactive conservation data story`, then **Sync Changes** or **Push**.
5. Wait 1–3 minutes for GitHub Pages to deploy, then open `https://mahnoorhmyn7.github.io/FIT3179_Assignment2/`.

## Structure

- `index.html` — data narrative and layout
- `style.css` — responsive visual design
- `js/vega_lite_vis.js` — interactive Vega-Lite embedding and animal-type dropdown
- `js/map.vg.json` — Vega-Lite map
- `js/programs.vg.json` — Vega-Lite program activity heatmap
- `js/outcomes.vg.json` — Vega-Lite published outcomes dot chart
- `data/sites.csv` — selected institution locations
- `data/programs.csv` — manually coded source-documented program examples
- `data/outcomes.csv` — selected reported released-to-wild outcomes
- `data/australia.geojson` — coastline generated from GSHHS low-resolution map data, supplied through Basemap

## Methodology and limitations

The sample covers 6 zoo/sanctuary sites in 5 states and 13 **selected** program examples. Figures are not a national census; program counts are counts of selected records, not total zoo programs. Coordinates are approximate zoo locations, not the field release locations. Program activity classifications were manually derived from the cited official pages (each source URL is stored in `data/programs.csv`). Missing activity flags mean only 'not documented for this example' and cannot establish that an organisation does not undertake that action. Some release counts are lower bounds (`+`), use differing reporting periods or refer to adult releases, and cannot be compared as zoo performance measures.

Each outcome row includes `source_url` and `reporting_period`. `data/outcomes.csv` includes minimum published values for comparison. See on-page Sources & Methodology for primary references. Data researched in October 2026.

## Before submission

- Add your name and student ID if required by your assessment instructions.
- Check the official rubric on Moodle for required number of charts, page elements, data-sourcing criteria, citations and peer-assessment instructions.
- Check published numbers again and update them if new official reports have appeared.
- Ensure GitHub Pages displays all three interactive Vega-Lite charts and that the animal-group dropdown works.
