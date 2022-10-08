const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log('Example app listening on port 4000!');
});
