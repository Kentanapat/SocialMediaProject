const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
        min:5,
        max:20,
        unique:true
    },
    email:{
        type:String,
        required: true,
        max: 50,
        unique: true,
    },
    password:{
        type:String,
        required:true,
        min:8,
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    followings:{
        type:Array,
        default:[]
    },
    isAdmin: { //To check if you're the owner of the account related to posts
        type: Boolean,
        default: false,
    },
    description:{
        type:String,
        max: 80
    },
    location:{
        type: String,
        max: 50,
    },
},
    {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);