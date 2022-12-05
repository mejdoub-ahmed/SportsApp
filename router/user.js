const express = require("express");
const router = express.Router();

// Require controller modules.
const { getAllUsers, addUser, updateUser } = require("../controllers/user.js");

/// USERS ROUTES ///

//GET request to fetch all users. NOTE This must come before route for id.
router.get("/getall", getAllUsers);

router.post("/add", addUser);

router.put("/put/:iduser", updateUser);

module.exports = router;
