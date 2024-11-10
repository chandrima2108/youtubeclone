import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api'; // Adjust the import based on your project structure

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await api.get('/videos'); // Adjust the API endpoint as needed
                setVideos(response.data);
            } catch (error) {
                console.error('Failed to fetch videos:', error);
            }
        };
        fetchVideos();
    }, []);

    const filteredVideos = videos.filter(video => {
        const matchesTitle = video.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
        return matchesTitle && matchesCategory;
    });

    return (
        <div className="p-4">
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Video Library</h1>
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border p-2 rounded"
                />
            </header>
            <div className="flex space-x-4 mb-4">
                <button onClick={() => setSelectedCategory('All')} className="bg-gray-300 p-2 rounded">All</button>
                <button onClick={() => setSelectedCategory('Education')} className="bg-gray-300 p-2 rounded">Education</button>
                <button onClick={() => setSelectedCategory('Gaming')} className="bg-gray-300 p-2 rounded">Gaming</button>
                <button onClick={() => setSelectedCategory('Comedy')} className="bg-gray-300 p-2 rounded">Comedy</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredVideos.map(video => (
                    <Link to={`/video/${video.id}`} key={video.id} className="border p-4 rounded hover:shadow-lg transition-shadow">
                        <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover rounded" />
                        <h2 className="text-xl mt-2">{video.title}</h2>
                        <p className="text-gray-600">Channel: {video.channelName}</p>
                        <p className="text-gray-600">Views: {video.views}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;