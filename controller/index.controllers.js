module.exports = { //module.exports object with keys/property that are assigned a function
    // Home and Other Pages
    Home: function (req,res) {
      res.send("Home Page");
    },
    About: function (req,res) {
      res.send("About us Page");
    },
    Contact: function (req,res) {
      res.send("Contact us Page");
    },
    Connect: function (req,res) {
      res.send("Connect with us Page");
    },
    //Cart
    Cart: function (req,res) {
      res.send("Cart Page");
    },
    Summary: function (req,res) {
      res.send("Order Summary Page");
    },
    Shipping: function (req,res) {
      res.send("Shipping Details Page");
    },
    Payment: function (req,res) {
      res.send("Payment Page");
    },
    Confirmation: function (req,res) {
      res.send("Order Confirmation Page");
    }
};
