const { User, Thought }= require('../models/index');
const connection = require('../config/connection');

const users = [
    {
        username: 'EmilySmith2023',
        email: 'emilysmith@example.com',
    },
    {
        username: 'JohnDoe_87',
        email: 'johndoe_87@example.com',
    },
    {
        username: 'SarahJohnson21',
        email: 'sarahjohnson21@example.com',
    },
    {
        username: 'DavidBrown34',
        email: 'davidbrown34@example.com',
    },
    {
        username: 'JessicaLee_99',
        email: 'jessicalee_99@example.com'
    }
];

const thoughts = [
    {
        thoughtText: "This is my first thought!",
        username: "JohnDoe_87",
        userId: "6442b084a3f0454e760eeb5a",
        reactions: [
            {
                reactionBody: "👍",
                username: "JessicaLee_99"
            },
            {
                reactionBody: "❤️",
                username: "DavidBrown34"
            }
        ]
    },
    {
        thoughtText: "I love this!",
        username: "EmilySmith2023",
        userId: "6441bb635167e7c3ebb53015",
        reactions: [
          {
            reactionBody: "👍",
            username: "DavidBrown34"
          },
          {
            reactionBody: "👎",
            username: "EmilySmith2023"
          },
          {
            reactionBody: "❤️",
            username: "JessicaLee_99"
          }
        ]
      }
];

connection.once('open', async () => {
    console.log('connected');

    try {
        await User.deleteMany({});

        await Thought.deleteMany({})

        console.log('All data deleted!');

        for (let user of users) {
            let newUser = new User(user);
            await newUser.save();
            console.log(`Added user: ${user.username}`);
        }

        for (let thought of thoughts) {
            let newThoughts = new Thought(thought);
            await newThoughts.save();
            console.log(`Added ${thought.thoughtText}`);
        }

        console.info('Seeding complete! 🌱');
        process.exit(0);

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
});
