var express = require('express');
//setting up express router -- to handle http methods
var router = express.Router();

// http methods are GET, POST, PUT, DELETE, PATCH
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.url);
  res.send(
    `<html>
        <head>
          <title>Trying ExpressJS</title>
        </head>
        <body>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/about'>About</a></li>
            </ul>
        <h1>Welcome to Home Page</h1>
        </body>
    </html>`
  );
});


module.exports = router;
