const { User, Thought } = require('../models/index');

const thoughtCount = async () =>
    Thought.aggregate()
        .count('thoughtCount')
        .then((numberOfThoughts) => numberOfThoughts);

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then(async (thought) => {
                const thoughtObj = {
                    thought,
                    thoughtCount: await thoughtCount(),
                };
                return res.json(thoughtObj);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                console.log(thought.reactions);

                const thoughtId = thought._id;
                const userId = req.body.userId;
                const reactions = thought.reactions;

                const updateThoughts = User.findOneAndUpdate(
                    { _id: userId },
                    { $push: { thoughts: thoughtId } },
                    { new: true }
                );

                const updateReactions = User.findOneAndUpdate(
                    { _id: userId },
                    { $push: { reactions: { $each: reactions } } },
                    { new: true }
                );

                return Promise.all([updateThoughts, updateReactions]);
            })
            .then(() => {
                res.json({ message: "thought created!" });
            })
            .catch((err) => res.status(500).json(err));
    }
}