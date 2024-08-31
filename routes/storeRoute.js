const express = require("express");
const { getStoreById } = require("../controllers/storeConroller");

const router = express.Router();


// get method will take first parameter as string "/" 
// second parameter will be the route/api from controller
router.get("/:id", getStoreById);

module.exports = router;