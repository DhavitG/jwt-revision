const { Router } = require("express");
const router = Router();

const { login, dashboard } = require("../controllers/main");
const authenticationMiddleware = require("../middleware/auth");

router.route("/dashboard").get(authenticationMiddleware, dashboard);

router.route("/login").post(login);

module.exports = router;
