const express = require('express')
const router = express.Router()

const { getItems } = require('../controllers/ItemsController')

router.route('/').get(getItems);

module.exports = router
