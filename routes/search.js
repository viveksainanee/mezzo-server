const express = require('express');
const axios = require('axios');
const { YELP_API_KEY } = require('../secret');

const router = express.Router();

const api = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`
  }
});

/** GET search */

router.get('', async function(req, res, next) {
  //query string will come in the format:
  // ?loc1=${this.state.loc1}&loc2=${this.state.loc2}`
  console.log('query string is', req.query);

  let response = await api.get(`/businesses/search?location=${req.query.loc1}`);
  return res.json(response.data.businesses);
});

module.exports = router;
