const express = require('express');
const app = express();
const  dotenv = require('dotenv');
const cors = require('cors')
const mongoose = require('mongoose');
const authRoute = require('./routes/authen')
const usersRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const categoryRoute = require('./routes/categorys')
const multer = require('multer')

dotenv.config();
app.use(express.json());
app.use(cors())


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreatIndex:true,
})
.then(console.log("connected to mongodb"))
.catch((err)=> console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, req.body.name);
    },
    filename: (req, file, cb) =>{
        cb(null, req.body.name);
    },
})

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res)=>{
    res.status(200).json("File has been uploaded")
})

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("4000", ()=>{console.log("app is listening at" )});