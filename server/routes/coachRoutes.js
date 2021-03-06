const express = require("express");
const router = express.Router();
const{list, create, update} = require('../controllers/coaches');

router.get('/', list)
// router.get('/:id', show)
router.post('/', create)
router.put('/', update)

module.exports = router;