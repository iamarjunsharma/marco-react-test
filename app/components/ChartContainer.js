import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

// Component for Chart
export default class ChartContainer extends Component {

  componentDidMount() {
    // create Chart
    const ctx = document.getElementById('chart');
    const lbs = [];
    Object.keys(this.props.data).map(k => lbs.push(this.props.data[k].lbs));
    const data = {
      labels: Object.keys(this.props.data),
      datasets: [{
        label: 'All - All',
        data: lbs,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 2,
        fill: false
      }]
    };
    const options = {
      title: {
        display: true,
        text: 'Application - Status'
      },
      scales: {
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Total Volume (lbs)'
          },
        }],
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Calendar Year'
          },
        }]
      }
    };

    // Initialize Chart
    const lineChart = new Chart(ctx, {
      type: 'line',
      data,
      options
    });
  }

  render() {
    return (
      <div className="chart-wrapper">
        <canvas id="chart" />
      </div>
    );
  }
}

// Props validation
ChartContainer.propTypes = {
  data: PropTypes.object.isRequired,
};
