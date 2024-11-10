const express = require('express');
const Video = require('../models/Video');
const router = express.Router();

// Get all videos
router.get('/', async (req, res) => {
    const videos = await Video.find().populate('uploader', 'username');
    res.json(videos);
});

// Get a single video by ID
router.get('/:id', async (req, res) => {
    const video = await Video.findById(req.params.id).populate('uploader', 'username');
    if (!video) return res.status(404).json({ message: 'Video not found' });
    res.json(video);
});

// Create a new video
router.post('/', async (req, res) => {
    const newVideo = new Video(req.body);
    await newVideo.save();
    res.status(201).json(newVideo);
});

// Update a video
router.put('/:id', async (req, res) => {
    const updatedVideo = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedVideo);
});

// Delete a video
router.delete('/:id', async (req, res) => {
    await Video.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;