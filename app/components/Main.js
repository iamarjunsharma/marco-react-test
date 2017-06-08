import React, { Component } from 'react';
import TableContainer from './TableContainer';
import ChartContainer from './ChartContainer';
import FormContainer from './FormContainer';
import Loading from './Loading';
import api from '../api/api';
import '../styles/style.scss';

// Main Component - Contains all the Components
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    // Make GET Request to the API for loading data
    api.getData()
      .then((response) => {
        this.setState({
          data: response.data['All - All']
        });
      });
  }

  render() {
    return (
      <div className="container">
        {!this.state.data
          ? <Loading />
          : <div>
            <h1>React Test</h1>
            <TableContainer data={this.state.data} />
            <ChartContainer data={this.state.data} />
            <FormContainer />
          </div>}
      </div>
    );
  }
}
