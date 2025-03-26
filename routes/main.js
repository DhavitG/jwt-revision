const { Router } = require("express");
const router = Router();

const { login, dashboard } = require("../controllers/main");

router.route("/dashboard").get(dashboard);

router.route("/login").post(login);

module.exports = router;
