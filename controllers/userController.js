const express = require('express');
const User = require('../models/userModel');
const router = express.Router();
const passport = require('passport');

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());