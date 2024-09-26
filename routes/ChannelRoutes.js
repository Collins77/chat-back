const express = require("express");
const channelController = require("../controllers/ChannelController");

const verifyToken = require("../middlewares/AuthMiddleware");

const router = express.Router();

router.post("/create-channel", verifyToken, channelController.createChannel);
router.get("/get-user-channels", verifyToken, channelController.getUserChannels);
router.get("/get-channel-messages/:channelId", verifyToken, channelController.getChannelMessages);

module.exports = router;
