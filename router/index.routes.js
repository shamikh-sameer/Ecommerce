const express = require('express');
const router = express.Router();
const controllers = require("../controller/index.controllers"); //controller object

// create routes dynamically and accessing via dot notation instead of function
//Home and Other pages
router.get("/home", controllers.Home);
router.get("/about", controllers.About); 
router.get("/contact", controllers.Contact); 
router.get("/connect", controllers.Connect);
//Cart
router.get("/cart", controllers.Cart);
router.get("/summary", controllers.Summary);
router.get("/shipping", controllers.Shipping);
router.get("/payment", controllers.Payment);
router.get("/confirmation", controllers.Confirmation);

module.exports = router;
