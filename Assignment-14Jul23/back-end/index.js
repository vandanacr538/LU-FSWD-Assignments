let express=require("express");
let app=express();
let dotenv=require("dotenv");
dotenv.config();
const jwt=require("jsonwebtoken");
let cors=require("cors");

let fsupdateDB=require("./fsupdateDB");

app.use(cors());
app.use(express.json());

let PORT=process.env.PORT;

app.listen(PORT, (err)=>{
    if(err){
        console.log(err);
    }
    console.log("Server Started " + PORT);
})

const data=require("./database");

// Login API
app.post("/login", (req,res)=>{
    const {username, password}=req.body;
    console.log(req.body);
    if(username===data.credentials.username){
        if(password===data.credentials.password){

            const userData=data.userData;
            const token=jwt.sign(userData, "mysecretkey");

            res.status(200).send({token:token});
        }
        else{
            res.status(401).send("username or password is incorrect")
        }
    }
    else{
        res.status(500).send("username or password is incorrect")
    }
})

// Edit Profile API
app.post("/editprofile", (req,res)=>{
    try{
        const isValid=jwt.verify(req.body.token, "mysecretkey");
        if(isValid){
            console.log(req.body.updateData);
            // let uname=req.body.updateData.username;
            // console.log(uname);
            fsupdateDB.updateUserData(req.body.updateData);
            res.status(200).send({msg:"Data added successfully"})
        }
    }
    catch(e){
        console.log(e);
        console.log("Invalid request");
        res.status(500).send({msg:"Unauthorized"})
    }
})
