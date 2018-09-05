const request = require('request');

const searchWalmart = (userInput, cb) => {
  let options = { query: userInput, format: 'json', apiKey: process.env.WALMART_API, numItems: 3 }
  request.get({ uri: 'http://api.walmartlabs.com/v1/search?', qs: options }, (err, res, body) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      cb(null, body);
    }
  })
};

module.exports.searchWalmart = searchWalmart;