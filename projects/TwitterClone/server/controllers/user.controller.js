const User = require('../models/user.model');

const api = module.exports;


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

api.findRanUser = (_req,res)=>{
    User.aggregate([{ $sample: { size: 1 } }])
        .then(allUsers=>{
            res.json({results: allUsers})
        })
        .catch(err => res.json({ message: "error", error: err }));
}

api.register = (req, res) => {
    User.find({email:req.body.email})
        .then(usersWithEmail=>{
            console.log("response when finding user", usersWithEmail)
            if(usersWithEmail.length ===0){
                User.create(req.body)
                .then(user => {
                    const userToken= jwt.sign({
                        id: user._id,
                        firstName: user.firstName
                    }, process.env.SECRET_KEY);
                    res.cookie("usertoken", userToken, process.env.SECRET_KEY, {
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
