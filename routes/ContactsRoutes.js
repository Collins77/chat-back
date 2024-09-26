const express = require("express");
const contactsController = require("../controllers/ContactsController");

const verifyToken = require("../middlewares/AuthMiddleware");

const router = express.Router();

router.post("/search", verifyToken, contactsController.searchContacts);
router.get("/get-contacts-for-dm", verifyToken, contactsController.getContactsForDMList);
router.get("/get-all-contacts", verifyToken, contactsController.getAllContacts);

module.exports = router;
