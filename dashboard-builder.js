
  (function (buildConfig) {
    const container = document.getElementById('container');
    for(let i = 0; i < buildConfig.length; i++){
      const bc = buildConfig[i];
          generateChart(bc)
    }
    function generateChart(config){
      const chartContainer = document.createElement('div');
      for(key in config.styles){
        chartContainer.style[key] = config.styles[key];
      }
      const canvas = document.createElement('canvas');
      canvas.id = config.id
      container.appendChild(chartContainer).appendChild(canvas)
      const ctx = canvas.getContext('2d');
      const chart = new Chart(ctx, config.config);
    }
  })(buildConfig)

