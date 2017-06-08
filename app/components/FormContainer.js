import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import api from '../api/api';

// Component for Form
export default class FormContainer extends Component {
  constructor(props) {
    injectTapEventPlugin();
    super(props);

    this.state = {
      response: null,
      firstName: null,
      lastName: null,
      email: null
    };

    this.submitForm = this.submitForm.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleFirstNameChange(event) {
    const input = event.target.value;
    this.setState({
      firstName: input,
    });
  }

  handleLastNameChange(event) {
    const input = event.target.value;
    this.setState({
      lastName: input
    });
  }

  handleEmailChange(event) {
    const input = event.target.value;
    this.setState({
      email: input
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.setState({ response: null });
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const email = this.state.email;

    // Make POST Request to the API
    api.postData(firstName, lastName, email)
      .then((response) => {
        this.setState({
          response: response.data
        });
      });
  }

  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.submitForm}>
          <TextField
            hintText="First Name"
            fullWidth
            onChange={this.handleFirstNameChange}
          />
          <TextField
            hintText="Last Name"
            fullWidth
            onChange={this.handleLastNameChange}
          />
          <TextField
            hintText="Email"
            fullWidth
            onChange={this.handleEmailChange}
          />
          <RaisedButton type="submit" label="Submit" primary />
        </form>
        <div className="response-wrapper">
          {this.state.response === null
            ? ''
            : <h4>Response: {this.state.response}</h4>}
        </div>
      </div>
    );
  }
}
