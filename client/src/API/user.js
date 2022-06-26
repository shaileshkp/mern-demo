const axios = require('axios').default;

exports.signup = (user) => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:5000/api/v1/user/signup', user)
          .then(function (response) {
            console.log(response);
            resolve(response)
          })
          .catch(function (error) {
            console.log(error);
            reject(error)
          });
    })
}