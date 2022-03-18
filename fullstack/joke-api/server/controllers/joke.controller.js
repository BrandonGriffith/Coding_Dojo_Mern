const Joke = require('../models/joke.model');


module.exports.findAllJokes = (_req,res)=>{
    Joke.find()
        .then(allJokes=>{
            res.json({results: allJokes})
        })
        .catch(err => res.json({ message: "error", error: err }));
}

module.exports.getOneJoke = (req,res)=>{
    Joke.findOne({_id: req.params.id })
        .then(foundJoke =>{
            res.json({results: foundJoke})
        })
        .catch(err => res.json({ message: "error", error: err }));
}

module.exports.createJoke = (req,res)=>{
    Joke.create(req.body)
        .then(newlyCreatedJoke =>{
            res.json({results: newlyCreatedJoke})
        })
        .catch(err => res.json({ message: "error", error: err }));
}

module.exports.updateOneJoke = (req,res)=>{
    Joke.findOneAndUpdate(
        {_id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke=>{
            res.json({results: updatedJoke})
        })
        .catch(err => res.json({ message: "error", error: err }));
}

module.exports.deleteOneJoke = (req,res)=>{
    Joke.deleteOne({_id: req.params.id })
        .then(deletedJoke =>{
            res.json({results: deletedJoke})
        })
        .catch(err => res.json({ message: "error", error: err }));
}

module.exports.findRanJoke = (_req,res)=>{
    Joke.aggregate([{ $sample: { size: 1 } }])
        .then(allJokes=>{
            res.json({results: allJokes})
        })
        .catch(err => res.json({ message: "error", error: err }));
}
