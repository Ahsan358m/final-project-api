const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    imagePathUrl: {
        type: String,
        required: false,
      },
    phone:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:'student',
    },
},{
    timestamps: true,
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    this.password = await bcrypt.hash(this.password, 10);
  });

userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };


const User = mongoose.model("User", userSchema)
module.exports = User;





