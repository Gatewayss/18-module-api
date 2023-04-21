const router = require('express').Router();
const {
    getThoughts,
    createThought,
    getSingleThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtController');

router.get('/', getThoughts)

router.post('/', createThought)

router.get('/:thoughtId', getSingleThought)

router.put('/:thoughtId', updateThought)

router.delete('/:thoughtId', deleteThought)

module.exports = router;