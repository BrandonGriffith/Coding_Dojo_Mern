const Movie = require('../models/movie.model');


module.exports.findAllMovies = (_req,res)=>{
    Movie.find()
        .then(allMovies=>{
            res.json({results: allMovies})
        })
        .catch(err => res.json({ message: "error", error: err }));
}

module.exports.getOneMovie = (req,res)=>{
    Movie.findOne({_id: req.params.id })
        .then(foundMovie =>{
            res.json({results: foundMovie})
        })
        .catch(err => res.json({ message: "error", error: err }));
}

module.exports.createMovie = (req,res)=>{
    Movie.create(req.body)
        .then(newlyCreatedMovie =>{
            res.json({results: newlyCreatedMovie})
        })
        .catch(err => res.json({ message: "error", error: err }));
}

module.exports.updateOneMovie = (req,res)=>{
    Movie.findOneAndUpdate(
        {_id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedMovie=>{
            res.json({results: updatedMovie})
        })
        .catch(err => res.json({ message: "error", error: err }));
}

module.exports.deleteOneMovie = (req,res)=>{
    Movie.deleteOne({_id: req.params.id })
        .then(deletedMovie =>{
            res.json({results: deletedMovie})
        })
        .catch(err => res.json({ message: "error", error: err }));
}

module.exports.findRanMovie = (_req,res)=>{
    Movie.aggregate([{ $sample: { size: 1 } }])
        .then(allMovies=>{
            res.json({results: allMovies})
        })
        .catch(err => res.json({ message: "error", error: err }));
}
