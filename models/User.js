const {Schema, model} = require('mongoose')
//user docuemnt
const UserSchema = new Schema ({
// username field 
userName: {
type: String,
required: true,
trim: true,
unique: true
},
password: {
    type: String,
    required: true,
    minlength:10
},
// email field 
email: {
    type: String,
    required: true,
    trim: true,
    unique:true,
    // validating the email format using regex 
    match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
},
thoughts :[
    {
    type:Schema.Types.ObjectId,
    ref:'Thought'
    }

],
// a subdocument that works as self-reference to enable the user to add followers  
friends: [
    {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
],
},
{
       // adding toJson property to the schema  
    toJSON: {
        virtuals: true,
        getters:true
    },
        // prevents virtuals from creating a duplicate of _id as `id`
    id: false
}
);
// virtual function to get the total of the user followers 
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
});
UserSchema.virtual('thoughtsCount').get(function() {
    return this.thoughts.reduce((total, thought) => 
        total + thought.reactions.length + 1,0)
});
// create the user model using the userSchema
const User = model('User', UserSchema);
// export the user model
module.exports = User