const router = require('express').Router();
const {
    getThoughts,
    createThought
} = require('../../controllers/thoughtController');

router.get('/', getThoughts)

router.post('/', createThought)

module.exports = router;