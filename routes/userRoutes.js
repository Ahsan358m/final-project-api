const { storage } = require("../middleware/firebase_upload");
const User = require("../models/UserModel");
const asyncHandler = require("express-async-handler");



const createUser = asyncHandler(async (req, res) =>{
    let {name, email, password, phone, role} =req.body;
    let user = await new User({
        name, email, password, phone, role
    });
    
    user.save();
    if(user){
        res.status(201).send({
            user,
            message: "User created successfully"
        });
    }
    });
    

const saveFileUrl = asyncHandler(async (req, res) => {
    try {
      /*
        if (!req.file) {
            res.status(400).json({
              success: false,
              message: "No file uploaded.",
            });
            return;
          }

      const file = req.file;

    //   const filePath = file.path
    //     const fileData = fs.readFileSync(filePath);

  
      // Get the download URL from Firebase Storage
      const storageRef = storage.bucket();
      const fileRef = storageRef.file(file.originalname);
      await fileRef.save(file.buffer, {
        contentType: file.mimetype,
      });
      const downloadURL = await fileRef.getSignedUrl({
        action:"read",
        expires:"01-01-2100"
      });
  
      // Save the download URL in the user document
      const user = await User.findById(req.params.userId);
      user.imagePath = downloadURL[0];

      await user.save();
      res.status(200).json({
        success: true,
        message: "File URL saved successfully.",
      });
      console.log(req.file);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to save file URL.",
        error: error.message,
      });*/
      const file = req.file;
    const imagePath = `/uploads/${file}`;
    const user = User.findByIdAndUpdate(
      req.params.id,{
        imagePathUrl: imagePath,
      }
    )
   // await user.save();
    res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      //image,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to upload image",
      error: error.message,
    });
  }
    
  });




  const getUsers = asyncHandler(async (req, res) =>{
    try{
        const user = await User.find()
        res.status(200).send({
            user
        })
    }catch(error){
        res.status(400).send(error)
    }
});

const deleteUser = asyncHandler(async (req, res) => {
  try {
    const {id} = req.params
    /*
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found.",
      });
      return;
    }

    const imagePath = user.imagePath;
    if (!imagePath) {
      // No image associated with the user, simply delete the user
      await user.remove();
      res.status(200).json({
        success: true,
        message: "User deleted successfully.",
      });
      return;
    }

    // Delete the file from Firebase Storage
    const bucket = storage.bucket();
    const fileRef = bucket.file(imagePath);
    await fileRef.delete();

    // Delete the user from MongoDB
    await user.remove();

    res.status(200).json({
      success: true,
      message: "User and associated file deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete user and associated file.",
      error: error.message,
    });*/

    res.status(200).json({
      success: true,
      message: "Image deleted successfully",
      image,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete image",
      error: error.message,
    });
  }
});


const getSingleUser = asyncHandler(async (req, res)=>{
const user = User.findById(req.params.userId);
if(!user){
  res.status(400).send({
    success:false,
    message:"Cant find user with this id"
  });
res.status(200).send({
  user,
  success:true,
})
}
});





























































/*
const upload = require("../middleware/multer_middleware");

const firebase = require("firebase/app");
require("firebase/storage");



firebase.initializeApp(firebaseConfig);
const storage = firebase.storage().ref();


const createUser = asyncHandler(async (req, res) =>{
let {name, email, password, phone, role} =req.body;
let user = await new User({
    name, email, password, phone, role
});

user.save();
if(user){
    res.status(201).send({
        user,
        message: "User created successfully"
    });
}
});


const saveFileUrl = async (req, res) => {
    try {
      const file = req.file;
  
      // Get the download URL from Firebase Storage
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.originalname);
      const downloadURL = await fileRef.getDownloadURL();
  
      // Save the download URL in the user document
      const user = await User.findById(req.params.userId);
      user.imagePath = downloadURL;
      await user.save();
  
      res.status(200).json({
        success: true,
        message: "File URL saved successfully.",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to save file URL.",
        error: error.message,
      });
    }
  };
  
const getUsers = asyncHandler(async (req, res) =>{
    try{
        const user = await User.find()
        res.status(200).send({
            user
        })
    }catch(error){
        res.status(400).send(error)
    }
})
*/

module.exports = {createUser, saveFileUrl, getUsers, deleteUser, getSingleUser};