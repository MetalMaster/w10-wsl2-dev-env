var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/version', async function(req, res, next) {
  
  const json = {
    "version": process.env.npm_package_version
  };

  res.send(json); 
  
});



module.exports = router;
