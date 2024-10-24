const userCntrl = require('../controller/User.js')
const express = require('express')
const router = express.Router();

router.route('/api/users').post(userCntrl.create)
router.route('/api/users').get(userCntrl.list)
router.param('userId', userCntrl.userById)
router.route('/api/users/:userId').get(userCntrl.read)
router.route('/api/users/:userId').get(userCntrl.update)
router.route('/api/users/:userId').get(userCntrl.remove)

module.exports = router;