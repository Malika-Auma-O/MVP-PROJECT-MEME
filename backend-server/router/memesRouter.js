const router = require("express").Router();
const memeController = require("../controllers/memeController.js");

router.get("/", memeController.getMemes);
router.post("/", memeController.postMeme);
router.delete("/:id", memeController.deleteMeme);
router.put("/:id", memeController.updateMeme);
router.get("/:userId", memeController.getUserMemes);

module.exports = router; 