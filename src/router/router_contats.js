const express = require('express');
const { ContactController, getAllContactController, updateContactController, deleteSingleContact, getSingleContactController, toggleFvrt } = require('../controller/contacts_controller');
const router = express.Router();

router.post('/create-contact',ContactController);
router.get('/',getAllContactController);
router.get('/:id',getSingleContactController);
router.patch('/:id',updateContactController);
router.delete('/:id',deleteSingleContact);
router.put('/toggle/:id',toggleFvrt);

module.exports = { ContactRouter: router };