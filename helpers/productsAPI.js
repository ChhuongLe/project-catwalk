const axios = require('axios');
const config = require('./config');

// Gets all the products in the API

const getAllProducts = () => {
  const options = {
    url: `${config.APIURL}products`,
  };

  axios(options)
    .then((res) => {
      // eslint-disable-next-line no-console
      console.log(res.data);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('ERROR: ', err);
    });
};

const getProductInfo = (productId, callback) => {
  const options = {
    url: `${config.APIURL}products/${productId}/`,
  };

  axios(options)
    .then((res) => {
      // eslint-disable-next-line no-console
      // console.log(res.data);
      callback(null, res.data);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('Error: ', err);
      callback(err, null);
    });
};

const getAllStyles = (productId, callback) => {
  const options = {
    url: `${config.APIURL}products/${productId}/styles`,
  };

  axios(options)
    .then((res) => {
      // eslint-disable-next-line no-console
      callback(null, res.data);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('Error: ', err);
      callback(err, null);
    });
};

const getRelatedItems = (productId, callback) => {
  const options = {
    url: `${config.APIURL}products/${productId}/related`,
  };

  axios(options)
    .then((res) => {
      // eslint-disable-next-line no-console
      callback(null, res.data);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('Error: ', err);
    });
};

module.exports = {
  getAllProducts,
  getProductInfo,
  getAllStyles,
  getRelatedItems,
};
