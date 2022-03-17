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
// email field 
email: {
    type: String,
    required: true,
    trim: true,
    unique:true,
    // validating the email format using regex 
    validate: [validateEmail,'Please fill a valid email address'],
    match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
},
thoughts :[

],
// a subdocument that works as self-reference to enable the user to add followers  
friends: [
    {
        type: Schema.type.ObjectId,
        ref:User
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
UserSchema.virtual('FriendCount').get(function() {
    return this.friends.length
});