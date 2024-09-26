const express = require("express");
const verifyToken = require("../middlewares/AuthMiddleware");
const multer = require("multer");
const authController = require('../controllers/AuthController.js');

const router = express.Router();

const upload = multer({ dest: "uploads/profiles/" });

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/user-info", verifyToken, authController.getUserInfo);
router.post("/update-profile", verifyToken, authController.updateProfile);
router.post("/add-profile-image", verifyToken, upload.single("profile-image"), authController.addProfileImage);
router.delete("/remove-profile-image", verifyToken, authController.removeProfileImage);
router.post("/logout", authController.logout);

module.exports = router;
