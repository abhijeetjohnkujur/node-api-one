const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send("Welcome to my main API page");
  console.log("Request Received for: ", req.path);
});

module.exports = router;
