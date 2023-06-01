const express = require("express");
const {createUser, saveFileUrl, getUsers, deleteUser, getSingleUser} = require("../routes/userRoutes");
const router = express.Router();
const uploadOptions = require("../middleware/multer_middleware");

router.route("/user-signup").post(createUser);
router.route("/users/:id").post(uploadOptions.single("image"), saveFileUrl);
router.route("/get-users").get(getUsers);
router.route("/delete-user/:userId").delete(deleteUser);
router.route("/get-user/:userId").get(getSingleUser);




module.exports = router;




