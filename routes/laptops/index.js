const express = require('express');
const router = express.Router();
const laptopPurchaseModel = require('../../models/laptopPurchase')

router.get('/', async(req, res) => {
 try 
 {
    const laptops = await laptopPurchaseModel.find();
    res.status(200).json(laptops); 
 }
 catch (error) 
 {
    res.status(500).json({ message: error.message });
 }
});

module.exports = router;
