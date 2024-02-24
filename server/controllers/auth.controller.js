const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const crypto = require("crypto");

// Register a new user => /api/v1/register

module.exports.register = catchAsyncErrors(async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  const user = await User.create({ username, email, password, aboutMe: "" });
  sendToken(user, 201, res);
});

// Login a registered user => /api/v1/login

module.exports.login = catchAsyncErrors(async (req, res, next) => {
  const { userLogin, password } = req.body;
  // Check if username and password is entered by user
  if (!userLogin && !password) {
    return next(new ErrorHandler("Please enter username & password", 400));
  }
  // Find user in database
  const user = await User.findOne({
    $or: [{ username: userLogin }, { email: userLogin }],
  }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid username or password", 401));
  }
  // Check if password is correct
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid username or password", 401));
  }
  sendToken(user, 200, res);
});

// Logout user => /api/v1/logout

module.exports.logout = catchAsyncErrors(async (req, res) => {
  req.logout((error) => {
    if (error) {
      // Handle error
      console.log(error);
      return next(new ErrorHandler("Logout failed", 500));
    }

    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: "Logged out",
    });
  });
});

// Forgot Password => /api/v1/password/forgot

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  //Check user email in database
  if (!user) {
    return next(new ErrorHandler(404, "User not found with this email"));
  }
  //Get reset token
  const resetToken = await user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });
  // Create reset password url
  const resetUrl = `${process.env.FRONT_END_URL}/password-reset/${resetToken}`;

  const message = `Your password reset token is as follow:\n\n${resetUrl}\n\nIf you have not requested this email, then ignore it.`;
  try {
    await sendEmail({
      email: user.email,
      subject: "SocialPlace password recovery",
      message,
    });
    res.status(200).json({
      success: true,
      message: `Email sent to: ${user.email}`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler(error.statusCode, error.message));
  }
});

// Reset Password => /api/v1/password/reset/:token
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  //Hash URL token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });
  //Check user
  if (!user) {
    return next(
      new ErrorHandler(400, "Password reset token is invalid or has expired")
    );
  }
  //Set new password
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  //Save user
  await user.save();
  //Send token
});
