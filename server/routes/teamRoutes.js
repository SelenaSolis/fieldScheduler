const express = require("express");
const router = express.Router();
const{list, show, create, update} = require('../controllers/teams');

router.get('/', list)
router.get('/:id', show)
router.post('/', create)
router.put('/', update)

module.exports = router;