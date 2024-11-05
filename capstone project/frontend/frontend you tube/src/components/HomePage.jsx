import React, { useState, useEffect } from 'react';
import api from '../api'; // Ensure this is correctly set up
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [videos, setVideos] = useState([]); // Initialize as an empty array
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // State to manage loading

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await api.get('/videos'); // Ensure this endpoint returns an array
                console.log(response.data); // Log the response data for debugging
                if (Array.isArray(response.data)) {
                    setVideos(response.data); // Set videos to the response data
                } else {
                    setError('Unexpected response format'); // Handle unexpected response
                }
            } catch (err) {
                console.error(err); // Log any errors
                setError('Failed to fetch videos'); // Set error message
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };
        fetchVideos();
    }, []);

    if (loading) return <div className="text-center text-lg">Loading videos...</div>; // Show loading state
    if (error) return <div className="text-red-500 text-center">{error}</div>; // Show error message

    return (
        <div className="p-4 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Video Thumbnails</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {videos.map(video => (
                    <Link to={`/video/${video._id}`} key={video._id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                        <img src={video.thumbnailUrl} alt={video.title} className="w-full h-40 object-cover" />
                        <div className="p-2">
                            <h3 className="text-lg font-semibold">{video.title}</h3>
                            <p className="text-gray-600">{video.uploader.username}</p>
                            <p className="text-gray-500">{video.views} views</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomePage;