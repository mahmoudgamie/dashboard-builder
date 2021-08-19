const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

const buildConfig = [
  {
    id: '1',
    position: '',
    priority: 1,
    styles: {
      width: '30vw',
      height: '2vw',
      order: '2'
    },
    dataSource: '',
    config: {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
    }
  },
  {
    id: '1',
    position: '',
    priority: 1,
    styles: {
      width: '30vw',
      height: '2vw',
      order: '2'
    },
    dataSource: '',
    config: {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'My Second Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'red',
          tension: 0.1
        }]
      },
    }
  },
]

