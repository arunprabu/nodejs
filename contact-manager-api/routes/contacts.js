var express = require('express');
var router = express.Router();

var contactService = require('../services/contactService');

/* GET localhost:3000/api/contacts . */
router.get('/',  function (req, res, next) {

  contactService.getContacts(function (err, data) {
    if (!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  });
});

// POST localhost:3000/api/contacts
router.post('/', function (req, res, next) {
  console.log(req.body);
  contactService.createContact(req.body, function (err, data) {
    if (!err) {
      console.log(data);
      res.json(data);
    } else {
      console.log(err);
      res.json(err);
    }
  });
});

// GET localhost:3000/api/contacts/1 
router.get('/:id', function (req, res, next) {
  contactService.getContactById(req.params.id, function (err, data) {
    if (!err) {
      console.log(data);
      res.json(data);
    } else {
      console.log(err);
      res.json(err);
    }
  })

});

// PUT localhost:3000/api/contacts/1 
router.put('/:id', function (req, res, next) {
  console.log(req.params.id);
  console.log(req.body);

  contactService.updateContact(req.params.id, req.body, function (err, data) {
    if (!err) {
      console.log(data);
      res.json(data);
    } else {
      console.log(err);
      res.json(err);
    }
  });

});

// DELETE localhost:3000/api/contacts/1 
router.delete('/:id', function (req, res, next) {
  console.log(req.params.id);
  let status = {
    code: 200,
    info: 'Deleted Successfully!'
  }
  res.json(status);
});

module.exports = router;