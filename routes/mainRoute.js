const express = require("express");
const router = express.Router();
const clubRoute = require("./clubRoute");
const studentRoute = require("../routes/studentRoutes")
const courseRoute = require("../routes/courses")
const staffRoute = require("../routes/staffRoute")

router.use("/clubs", clubRoute);
router.use("/students", studentRoute);
router.use("/courses",courseRoute)
router.use("/staff",staffRoute)

module.exports = router;
