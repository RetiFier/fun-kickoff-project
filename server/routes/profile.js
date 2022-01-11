const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { createProfile, editProfile, loadProfile, deleteProfile, loadAllProfile } = require("../controllers/profile");


router.route("/").post(protect, createProfile)
router.route("/:id").put(protect, editProfile)
router.route("/:id").get(protect, loadProfile)
router.route("/:id").delete(protect, deleteProfile)
router.route("/").get(protect, loadAllProfile)
module.exports = router;
