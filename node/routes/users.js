const router = require("express").Router();
const User = require("../models/user"); 
const bcrypt = require("bcrypt");
const Post = require("../models/post");

//UPDATE

router.put("/:id", async(req,res) =>{
    if(req.body.userId === req.params.id) {
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, {new:true});
            res.status(200).json(updatedUser)
            console.log(updatedUser);
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        } 
    }
    else{
        res.status(500).json("You can update only your account!")
    }
  
});


//DELETE
router.delete("/:id", async(req,res) =>{
    if(req.body.userId === req.params.id) {  
        try{
            const user = await User.findById(req.params.id);
            try {
                await Post.deleteMany({username:user.username})
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("user has been deleted...")
            } 
            catch (err) {
                res.status(500).json(err)
            } 
        } 
        catch (err){
            res.status(404).json("user not found!")
        }
    }
    else{
        res.status(401).json("You can delete only your account!")
    }
  
});


//GET USER
router.get("/:id", async (req,res)=>{
    try {
        const user =await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err)
    }
})


router.put("/:id", async (req, res)=>{
    return await Notify.updateOne(userId, { isSeen: true })
})

router.patch('/update-user-role', async (req, res) => {
    try {
      const { userId, newRole } = req.body;
  
      // Update the user's role in the database
      await User.findByIdAndUpdate(userId, { role: newRole });
  
      // Send a response to the client indicating that the update was successful
      res.send({ status: 'success' });
    } catch (err) {
      // If there was an error, send a response to the client indicating that the update failed
      res.status(500).send({ status: 'error', error: err.message });
    }
  });
module.exports = router