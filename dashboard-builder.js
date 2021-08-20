const container = document.getElementById('container');

fetch('../data/data.json')
  .then(res => res.json())
  .then(res => {
    const buildData = res.buildData;
    builder(buildData)
  })

function generateCanvas(config) {
  const canvas = document.createElement('canvas');
  canvas.id = `chart-${config.id}`;
  return canvas
}

function buildChartContainers(config) {
  const chartContainer = document.createElement('div');
  chartContainer.setAttribute('class', 'chart-container');
  chartContainer.setAttribute('id', config.id)
  for (key in config.styles) {
    chartContainer.style[key] = config.styles[key];
  }
  container.appendChild(chartContainer)
}

function attachChartToContainers(setup) {
  const canvas = generateCanvas(setup);
  const targetContainer = document.getElementById(setup.id);
  targetContainer.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  const chart = new Chart(ctx, setup.config);
  chart.options.maintainAspectRatio = false;
}

function builder(buildData) {
  let priorityConfig = [];
  for (let i = 0; i < buildData.length; i++) {
    const bc = buildData[i];
    buildChartContainers(bc)
    if (!bc.dataSource?.url) {
      attachChartToContainers(bc)
    } else {
      priorityConfig.push(bc);
    }
  }
  if (priorityConfig.length) {
    displayPriorityCharts(sortConfigByPriority(priorityConfig), 0);
  }
}

function displayPriorityCharts(config, i) {
  const dataPath = `../data/${config[i].dataSource.url}`
  fetch(dataPath)
    .then(res => res.json())
    .then(res => {
      config[i].config.data = res.data
      attachChartToContainers(config[i]);
      if (config[i + 1]) {
        i++;
        setTimeout(() => {
          displayPriorityCharts(config, i);
        }, 1000)
      }
    })
}

function sortConfigByPriority(config) {
  return config.sort((a, b) => a.dataSource.priority - b.dataSource.priority);
}

