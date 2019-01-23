const express = require('express');

const router = express.Router();

/** GET search */

router.get('', (req, res, next) => {
  // do yelp call here
  let result = [1, 2, 3];
  return res.json(result);
});

module.exports = router;
