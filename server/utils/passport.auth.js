const express = require("express");
const passport = require("passport");
const User = require("../models/user.model");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const BearerStrategy = require("passport-http-bearer").Strategy;
const GithubStrategy = require("passport-github2").Strategy;

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/v1/auth/google/callback",
        scope: ["profile", "email"],
      },
      async function (accessToken, refreshToken, profile, cb) {
        try {
          const user = await User.findOne({ email: profile.emails[0].value });
          if (user) {
            return cb(null, user);
          } else {
            const email = profile.emails ? profile.emails[0].value : undefined;
            console.log(profile);
            const newUser = new User({
              googleId: profile.id,
              username: profile.displayName,
              email: email,
              password: profile.id,
            });
            await newUser.save();
            return cb(null, newUser);
          }
        } catch (err) {
          return cb(err);
        }
      }
    )
  );

  passport.use(
    new GithubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "/api/v1/auth/github/callback",
        scope: ["user:email"], // Add this line
      },
      async function (accessToken, refreshToken, profile, done) {
        try {
          const user = await User.findOne({ email: profile.emails[0].value });
          if (user) {
            return done(null, user);
          } else {
            const email = profile.emails ? profile.emails[0].value : undefined;
            console.log(profile);
            const newUser = new User({
              githubId: profile.id,
              username: profile.username,
              email: email,
              password: profile.id,
            });
            await newUser.save();
            return done(null, newUser);
          }
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  passport.serializeUser(function (user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
};