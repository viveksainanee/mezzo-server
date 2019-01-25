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
  // do yelp call here
  let response = await api.get(`/businesses/search?location='Seattle'`);
  return res.json(response.data.businesses);
});

module.exports = router;
