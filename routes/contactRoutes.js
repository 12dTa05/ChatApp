const express = require('express');
const router = express.Router();
const {getContact, postContact, getContactId, updateContactId, deleteContactId} = require('../controllers/contactController.js');

router.route('/').get(getContact).post(postContact);

router.route('/:id').get(getContactId).put(updateContactId).delete(deleteContactId);

module.exports = router;