const router = require('express').Router();
const {
    getThoughts,
    createThought,
    getSingleThought,
    updateThought,
    deleteThought,
    createReaction, 
    deleteReaction
} = require('../../controllers/thoughtController');

router.get('/', getThoughts)

router.post('/', createThought)

router.get('/:thoughtId', getSingleThought)

router.put('/:thoughtId', updateThought)

router.delete('/:thoughtId', deleteThought)

router.post('/:thoughtId/reactions', createReaction)

router.delete('/:thoughtId/reactions', deleteReaction)

module.exports = router;