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
    id: '2',
    position: '',
    priority: 1,
    styles: {
      width: '20vw',
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
  {
    id: '3',
    position: '',
    priority: 1,
    styles: {
      width: '20vw',
      order: '3'
    },
    dataSource: '',
    config: {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'My Third Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'blue',
          tension: 0.1
        }]
      },
    }
  },
  {
    id: '4',
    position: '',
    priority: 1,
    styles: {
      width: '20vw',
      order: '4'
    },
    dataSource: '',
    config: {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'My fourth Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'green',
          tension: 0.1
        }]
      },
    }
  },
  {
    id: '5',
    position: '',
    priority: 1,
    styles: {
      width: '20vw',
      order: '5'
    },
    dataSource: '',
    config: {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'My fifth Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'orange',
          tension: 0.1
        }]
      },
    }
  },
  {
    id: '6',
    position: '',
    priority: 1,
    styles: {
      width: '20vw',
      order: '1'
    },
    dataSource: '',
    config: {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'My sixth Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'black',
          tension: 0.1
        }]
      },
    }
  }
]

