const express = require('express')
const router = express.Router();
const trackerController = require('../controllers/trackerController')
// const Blog = require('../models/blog');

router.get('/', trackerController.schnorkel)
router.post('/new-user', trackerController.newUser_post)

//get a list of all users
router.get('/users', trackerController.users_get);

// Add an exercise to user
router.post('/add/', trackerController.addExercise_post);

router.get('/log/', trackerController.log_get)

module.exports = router;