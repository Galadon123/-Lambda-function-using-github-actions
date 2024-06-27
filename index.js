const _ = require('lodash');

exports.handler = async (event) => {
  const maxValue = 100;
  const randomNumber = _.random(0, maxValue);
  const response = {
    statusCode: 200,
    body: JSON.stringify(`Random number: ${randomNumber}`),
  };
  return response;
};
