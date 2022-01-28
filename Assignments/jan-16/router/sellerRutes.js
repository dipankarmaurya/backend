const express = require('express');
const sellerMiddleware = require('../middleware/sellerMiddleware');
const sellerController = require('../controller/sellerController');
const middleware = require('../middleware/sellerMiddleware');
const seller =express();

seller.get('/getSellers',sellerController.getAllsellers);
seller.post('/createSeller',sellerMiddleware,sellerController.createSeller); 
seller.post('/updateSeller/:id',sellerMiddleware,sellerController.findByIdAndUpdate);
seller.post('/deleteSeller/:id',sellerController.findByIdAndDelete);

module.exports=seller;