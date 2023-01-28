const router = require("express").Router();
const User = require("../models/user"); 
const bcrypt = require("bcrypt");

//register

router.post('/register', async(req,res) =>{
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedpass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            fullname: req.body.fullname,
            university: req.body.university,
            department: req.body.department,
            email : req.body.email,
            phone: req.body.phone,
            year: req.body.year,
            dateofbirth: req.body.dateofbirth,
            password: hashedpass,
        });
        console.log(newUser)
        const user = await newUser.save();
        console.log(user);
        // res.json({status:'ok'})
        res.status(200).json(newUser);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
        console.log(err)
    }
});

//login
router.post('/login', async (req, res)=>{
    try{
        const user = await User.findOne({email:req.body.email})
        !user && res.status(404).json("Wrong credentials")

        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(404).json("Wrong credentials")
        
        const { password, ...others } = user._doc;
        res.status(200).json(others);
        console.log(others);
    }
    catch(err){
        // res.status(500).json(err)
        console.log(err);
    }
    
})

module.exports = router