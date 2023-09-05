const mongoose = require('mongoose')

const MoviesSchema = new mongoose.Schema({
    movieName: {
        type: String,
        trim: true
    },
    
    theatreName: {
        type: String,
        trim: true
    },
    theatreLocation: {
        type: String,
        trim: true
    },
    dateRelease: {
        type: String,
        trim: true
    }
})
const Movies = mongoose.model('movies', MoviesSchema)

module.exports = Movies