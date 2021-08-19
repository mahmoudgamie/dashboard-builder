const container = document.getElementById('container');

fetch('data.json')
  .then(res => res.json())
  .then(res => {
    const buildConfig = res.buildConfig;
    builder(buildConfig)
  })

function generateChart(setup) {
  const chartContainer = document.createElement('div');
  for (key in setup.styles) {
    chartContainer.style[key] = setup.styles[key];
  }
  const canvas = document.createElement('canvas');
  canvas.id = setup.id;
  container.appendChild(chartContainer).appendChild(canvas);
  const ctx = canvas.getContext('2d');
  const chart = new Chart(ctx, setup.config);
}

function builder(buildConfig) {
  for (let i = 0; i < buildConfig.length; i++) {
    const bc = buildConfig[i];
    if (!bc.dataSourceURL) {
      generateChart(bc);
    }
  }
  const priorityConfig = buildConfig.filter(bc => bc.dataSourceURL).sort((a, b) => a.priority - b.priority);
  displayPriorityCharts(priorityConfig, 0);
}

function displayPriorityCharts(config, i) {
  if (!config.length) return;
  fetch(config[i].dataSourceURL)
    .then(res => res.json())
    .then(res => {
      config[i].config.data = res.data
      generateChart(config[i]);
      if (config[i + 1]) {
        i++;
        displayPriorityCharts(config, i);
      }
    })
}

