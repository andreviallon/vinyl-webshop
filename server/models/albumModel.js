import mongoose from 'mongoose';

const tracksSchema = mongoose.Schema({
    name: { type: String, required: true },
    length: { type: String, required: true },
    trackNumber: { type: Number, required: true }
});

const reviewSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true }
}, {
    timestamps: true
});

const albumSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true,
    },
    tracks: [tracksSchema],
    genre: {
        type: Array,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    reviews: [reviewSchema],
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps : true
});

const Album = mongoose.model('Album', albumSchema);

export default Album
