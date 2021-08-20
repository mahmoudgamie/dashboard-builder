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
  let priorityConfig = [];
  for (let i = 0; i < buildConfig.length; i++) {
    const bc = buildConfig[i];
    if (!bc.dataSourceURL) {
      generateChart(bc);
    } else {
      priorityConfig.push(bc);
    }
  }
  if (priorityConfig.length) {
    displayPriorityCharts(sortConfigByPriority(priorityConfig), 0);
  }
}

function displayPriorityCharts(config, i) {
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

function sortConfigByPriority(config) {
  return config.sort((a, b) => a.priority - b.priority);
}

