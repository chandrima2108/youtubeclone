import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ChannelPage = () => {
    const [videos, setVideos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    useEffect(() => {
        // Fetch user's videos from the API
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        // Replace with your API call
        const response = await fetch('/api/videos');
        const data = await response.json();
        setVideos(data);
    };

    const handleCreateOrEditVideo = (video) => {
        if (currentVideo) {
            // Update video logic
            updateVideo(video);
        } else {
            // Create video logic
            createVideo(video);
        }
        setIsModalOpen(false);
    };

    const createVideo = async (video) => {
        // Replace with your API call
        await fetch('/api/videos', {
            method: 'POST',
            body: JSON.stringify(video),
            headers: { 'Content-Type': 'application/json' },
        });
        fetchVideos();
    };

    const updateVideo = async (video) => {
        // Replace with your API call
        await fetch(`/api/videos/${currentVideo.id}`, {
            method: 'PUT',
            body: JSON.stringify(video),
            headers: { 'Content-Type': 'application/json' },
        });
        fetchVideos();
    };

    const handleDeleteVideo = async (id) => {
        // Replace with your API call
        await fetch(`/api/videos/${id}`, {
            method: 'DELETE',
        });
        fetchVideos();
    };

    return (
        <div>
            <header className="flex justify-between items-center p-4">
                <h1 className="text-2xl">My Channel</h1>
                <button onClick={() => { setCurrentVideo(null); setIsModalOpen(true); }} className="bg-blue-500 text-white p-2 rounded">
                    Create Video
                </button>
            </header>
            <div className="grid grid-cols-3 gap-4 p-4">
                {videos.map(video => (
                    <div key={video.id} className="border p-4">
                        <h2 className="text-xl">{video.title}</h2>
                        <button onClick={() => { setCurrentVideo(video); setIsModalOpen(true); }} className="bg-yellow-500 text-white p-1 rounded">Edit</button>
                        <button onClick={() => handleDeleteVideo(video.id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
                    </div>
                ))}
            </div>
            {isModalOpen && (
                <VideoModal 
                    video={currentVideo} 
                    onClose={() => setIsModalOpen(false)} 
                    onSave={handleCreateOrEditVideo} 
                />
            )}
        </div>
    );
};

const VideoModal = ({ video, onClose, onSave }) => {
    const [title, setTitle] = useState(video ? video.title : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ title });
    };

    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Video Title" 
                    required 
                />
                <button type="submit">Save</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default ChannelPage; 