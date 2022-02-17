const axios = require('axios');
const config = require('./config');

const getCart = (callback) => {
  const options = {
    url: `${config.APIURL}cart`,
  };

  axios(options)
    .then((res) => {
      // eslint-disable-next-line no-console
      callback(null, res.data);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('ERROR: ', err);
    });
};

const addToCart = (skuId, quantity) => {
  const options = {
    url: `${config.APIURL}cart`,
    method: 'POST',
    data: {
      sku_id: skuId,
      count: quantity,
    },
  };

  return axios(options);
};

module.exports = {
  getCart,
  addToCart,
};
