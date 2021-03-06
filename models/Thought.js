const {Schema,Types, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat')

// sub document to creat a reaction section 
const reactionSchema = new Schema(
    {

        reactionId: {
            type: Schema.Types.ObjectId,
            default:() => new Types.ObjectId() 
        },
        reactionBody: {
            type:String,
            required: true,
            trim:true,
        }, 
        writtenBy: {
            type: String,
            required:true,
            trim:true
        },
        createdAT: {
            type: Date,
            default:Date.now,
            get:createdATVal => dateFormat(createdATVal)
        },
    },
    {
        toJSON: {
            virtuals:true,
            getters: true
        },
        id: false
    }
)

const ThoughtSchema = new Schema ({
    thoughtText:{
        type: String,
        required: true,
        minlength:1,
        maxlength:280
    },
    createdAT: {
        type: Date,
        default:Date.now,
        get:createdATVal => dateFormat(createdATVal)
    },
    writtenBy: {
        type: String,
        required:true,
        trim:true
    },
    reactions: [reactionSchema]
},
{
    toJSON: {
        virtuals:true,
        getters: true
    },
    id: false
}
);
ThoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);
module.exports = Thought;