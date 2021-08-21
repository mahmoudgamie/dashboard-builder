const container = document.getElementById('container');

fetch('../data/data.json')
  .then(res => res.json())
  .then(res => {
    const buildData = res.buildData;
    builder(buildData)
  })

function generateCanvas(widget) {
  const canvas = document.createElement('canvas');
  canvas.id = `chart-${widget.id}`;
  return canvas
}

function buildWidgetContainers(widget) {
  const widgetContainer = document.createElement('div');
  const widgetBody = document.createElement('div');
  const widgetTitle = document.createElement('h5');
  widgetContainer.setAttribute('class', 'widget-container');
  widgetContainer.setAttribute('id', widget.id)
  for (key in widget.styles) {
    widgetContainer.style[key] = widget.styles[key];
  }
  widgetBody.setAttribute('class', 'widget-body');
  widgetTitle.setAttribute('class', 'widget-title');
  widgetTitle.innerHTML = widget.title || null;
  container.appendChild(widgetContainer).appendChild(widgetBody).appendChild(widgetTitle)
}

function attachChartWidget(widget) {
  const chartContainer = document.createElement('div');
  const targetWidget = document.getElementById(widget.id);
  const canvas = generateCanvas(widget);
  const ctx = canvas.getContext('2d');
  chartContainer.setAttribute('class', 'chart-container');
  chartContainer.appendChild(canvas);
  targetWidget.firstChild.appendChild(chartContainer)
  const chart = new Chart(ctx, widget.config);
  chart.options.maintainAspectRatio = false;
}

function attachTextWidget(widget) {
  const text = document.createElement('p');
  text.innerHTML = widget.data || null;
  text.setAttribute('class', 'widget-text');
  const targetWidget = document.getElementById(widget.id);
  targetWidget.firstChild.appendChild(text)
}

function mapWidgets(widget) {
  // we can extend the switch cases to configure more widget generator functions for different types
  switch (widget.type) {
    case 'chart':
      attachChartWidget(widget)
      break;
    case 'text':
      attachTextWidget(widget)
      break;
  }
}

function builder(buildData) {
  let priorityWidgets = [];
  for (let i = 0; i < buildData.length; i++) {
    const bc = buildData[i];
    buildWidgetContainers(bc)
    if (!bc.dataSource?.url) {
      mapWidgets(bc)
    } else {
      priorityWidgets.push(bc);
    }
  }
  if (priorityWidgets.length) {
    displayPriorityWidgets(sortWidgetsByPriority(priorityWidgets), 0);
  }
}

function displayPriorityWidgets(config, i) {
  const dataPath = `../data/${config[i].dataSource.url}`
  fetch(dataPath)
    .then(res => res.json())
    .then(res => {
      config[i].config.data = res.data
      mapWidgets(config[i]);
      if (config[i + 1]) {
        i++;
        // the setTimeOut function is to mock the API behaviour
        setTimeout(() => {
          displayPriorityWidgets(config, i);
        }, 1000)
      }
    })
}

function sortWidgetsByPriority(widgets) {
  return widgets.sort((a, b) => a.dataSource.priority - b.dataSource.priority);
}

