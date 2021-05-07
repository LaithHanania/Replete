const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const { google } = require("googleapis");
const keys = require("../config/keys");

const User = mongoose.model("users");
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((sessionUser, done) => {
  User.findById(sessionUser.id).then((user) => {
    const amendedUser = user;
    amendedUser.accessToken = sessionUser.accessToken;
    done(null, amendedUser);
  });
});

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        const session = {
          id: existingUser._id,
          givenName: existingUser.givenName,
          familyName: existingUser.familyName,
          googleId: existingUser.googleId,
          emails: existingUser.emails,
          accessToken: accessToken,
        };

        return done(null, session);
      }

      const user = await new User({
        googleId: profile.id,
        givenName: profile.name.givenName,
        familyName: profile.name.familyName,
        emails: profile.emails,
      }).save();

      const session = {
        id: user._id,
        givenName: user.givenName,
        familyName: user.familyName,
        googleId: user.googleId,
        emails: user.emails,
        accessToken: accessToken,
      };

      done(null, session);
    }
  )
);
