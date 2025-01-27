const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send("Laptops");
  console.log("Request Received for: ", req.path);
});

module.exports = router;
