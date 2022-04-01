const User = require('../models/user.model');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const api = module.exports;
const key = process.env.SECRET_KEY;


api.findAllUsers = (_req,res)=>{
    User.find()
        .then(allUsers=>{
            res.json({results: allUsers})
        })
        .catch(err => res.json({ message: "error", error: err }));
}

api.getOneUser = (req,res)=>{
    User.findOne({_id: req.params.id })
        .then(foundUser =>{
            res.json({results: foundUser})
        })
        .catch(err => res.json({ message: "error", error: err }));
}

api.createUser = (req,res)=>{
    User.create(req.body)
        .then(newlyCreatedUser =>{
            res.json({results: newlyCreatedUser})
        })
        .catch(err => res.json({ message: "error", error: err }));
}

api.updateOneUser = (req,res)=>{
    User.findOneAndUpdate(
        {_id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser=>{
            res.json({results: updatedUser})
        })
        .catch(err => res.json({ message: "error", error: err }));
}

api.deleteOneUser = (req,res)=>{
    User.deleteOne({_id: req.params.id })
        .then(deletedUser =>{
            res.json({results: deletedUser})
        })
        .catch(err => res.json({ message: "error", error: err }));
}

api.register = (req, res) => {
    User.find({email:req.body.email})
        .then(usersWithEmail=>{
            if(usersWithEmail.length === 0){
                User.create(req.body)
                .then(user => {
                    const userToken= jwt.sign({
                        id: user._id,
                        firstName: user.firstName
                    }, key);
                    res.cookie("usertoken", userToken, key, {
                            httpOnly: true
                        })
                        .json({ msg: "success!", user: user });
                })
                .catch(err => res.json(err));
            }else{
                res.json({errors: {email:{message:"Email is taken!"}}})
            }
        })
        .catch(err=>console.log("errr!", err))
}

api.login = async(req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if(user === null) {
        return res.json({error: "User not found"})
    }
    const correctPassword = await bcrypt.compare(req.body.password, user.password);
    if(!correctPassword) {
        return res.json({error: "Password is incorrect!"})
    }
    const userToken = jwt.sign({
        id: user._id,
        firstName: user.firstName
    }, key);
    res.cookie("usertoken", userToken, key, {
            httpOnly: true,
            sameSite: 'none', 
            secure: true
        })
        .json({ msg: "success!" });
}

api.logout = (_req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
}

api.getLoggedInUser = (req,res) => {
    const decodedJWT = jwt.decode(req.cookies.usertoken, {complete:true});
    if (decodedJWT === null) return res.json({error: "Error no user logged in."});
    User.findOne({_id: decodedJWT.payload.id })
        .then(foundUser=>{
            res.json({results: foundUser})
        })
        .catch(err=>{
            res.json(err)
        })
}
