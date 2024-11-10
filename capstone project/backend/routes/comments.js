const express = require('express');
const Comment = require('../models/Comment');
const router = express.Router();

// Get comments for a video
router.get('/:videoId', async (req, res) => {
    const comments = await Comment.find({ videoId: req.params.videoId }).populate('userId', 'username');
    res.json(comments);
});

// Add a comment
router.post('/', async (req, res) => {
    const newComment = new Comment(req.body);
    await newComment.save();
    res.status(201).json(newComment);
});

// Delete a comment
router.delete('/:id', async (req, res) => {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;