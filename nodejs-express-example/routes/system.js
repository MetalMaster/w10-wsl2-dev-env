var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/version', async function(req, res, next) {
  
  res.send({"version":"0.0.1"}); //FIXME: get version from package.json

  
});



module.exports = router;
