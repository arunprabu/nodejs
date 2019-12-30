var express = require('express');
var router = express.Router();

/* GET about . */
router.get('/', function(req, res, next) {
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
            <h1>Welcome to About Page</h1>
            </body>
        </html>`
      );
});

module.exports = router;
