const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema([{
    videoId: String,
    title: String,
    thumbnailUrl: String,
    description: String,
    channelId: String,
    uploader: String,
    views: Number,
    likes: Number,
    dislikes: Number,
    uploadDate: Date,
    comments: Array,
}]);

module.exports = mongoose.model('Video', videoSchema); 