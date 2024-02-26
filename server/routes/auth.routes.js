const {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth.controller");
const passport = require("passport");

const { isAuthenticatedUser } = require("../middlewares/auth");
const sendToken = require("../utils/jwtToken");
const router = require("express").Router();
const CLIENT_URL = process.env.CLIENT_URL;

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.post("/password/forgot", forgotPassword);
router.post("/password/reset/:token", resetPassword);
router.get("/login/success", (req, res) => {
  if (req.user) {
    sendToken(req.user, 200, res);
  } else {
    res.status(401).json({
      success: false,
      message: "User failed to authenticate.",
    });
  }
});
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "User failed to authenticate.",
  });
  res.redirect(CLIENT_URL);
});
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: `http://localhost:3000/login`,
    successRedirect: `http://localhost:3000/login`,
  })
);
router.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["profile"] })
);
router.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    failureRedirect: `http://localhost:3000/login`,
    successRedirect: `http://localhost:3000/login`,
  })
);

// router.get(
//   "/auth/facebook",
//   passport.authenticate("facebook", { scope: ["profile"] })
// );
// router.get(
//   "/auth/facebook/callback",
//   passport.authenticate("facebook", {
//     failureRedirect: `http://localhost:3000/api/v1/login/failed`,
//     successRedirect: `http://localhost:3000/api/v1/login/success`,
//   })
// );

module.exports = router;
