// FIT3179 Data Visualisation 2 — Vega-Lite embeds.
// Run through GitHub Pages or VS Code Live Server (not a file:// URL).
const options = { actions: { export: true, source: false, compiled: false, editor: false }, renderer: "svg", tooltip: { theme: "dark" } };

async function renderChart(target, file, extraTransform = []) {
  const element = document.querySelector(target);
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`${file}: HTTP ${response.status}`);
    const spec = await response.json();
    if (extraTransform.length) spec.transform = [...extraTransform, ...(spec.transform || [])];
    await vegaEmbed(target, spec, options);
  } catch (error) {
    console.error(error);
    element.innerHTML = '<div class="error-panel">Chart could not load. Open this site through GitHub Pages or VS Code Live Server and check your internet connection.</div>';
  }
}

renderChart('#zooMap', 'js/map.vg.json');
renderChart('#outcomesChart', 'js/outcomes.vg.json');
const taxonFilter = document.getElementById('taxonFilter');
function updateHeatmap() {
  const value = taxonFilter.value;
  const filter = value === 'All' ? [] : [{ filter: `datum.taxon == '${value}'` }];
  renderChart('#programHeatmap', 'js/programs.vg.json', filter);
}
taxonFilter.addEventListener('change', updateHeatmap);
updateHeatmap();
