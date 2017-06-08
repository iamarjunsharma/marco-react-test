import axios from 'axios';

// Methods for interacting with the API
module.exports = {

  // Get data from the API
  getData() {
    return axios({
      url: 'http://yam.ba/react/restserver/index.php/api/test',
      method: 'get',
      auth: {
        username: 'app',
        password: 'q@CRV6^P@+gH99x#'
      }
    })
      .then(data => data);
  },

  // Post Form Data to the API
  postData(firstName, lastName, email) {
    const payload = {
      firstname: firstName,
      lastname: lastName,
      email
    };
    return axios({
      url: 'http://yam.ba/react/restserver/index.php/api/test/',
      method: 'post',
      data: JSON.stringify(payload),
      auth: {
        username: 'app',
        password: 'q@CRV6^P@+gH99x#'
      }
    })
      .then(data => data);
  }
};
