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
                return User.findOneAndUpdate({ _id: req.body.userId}, {$push: {thoughts: thought._id}}, { new: true})
            })
            .then(() => {
                res.json({message: "thought created!"});
              })
            .catch((err) => res.status(500).json(err));
    },
}