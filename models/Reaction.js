const { Schema } = require('mongoose');
// const mongoose = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: Schema.Types.ObjectId
        },
        reactionBody: {
            type: String,
            required: true, 
            minlength: 1,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => {
                const date = new Date(timestamp);
                return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
            }
        }
    },
);

module.exports = reactionSchema;