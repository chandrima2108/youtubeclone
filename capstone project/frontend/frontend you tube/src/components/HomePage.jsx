import React, { useState, useEffect } from 'react';
import api from '../api'; // Adjust the import based on your project structure
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [videos, setVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        const fetchVideos = async () => {
            const response = await api.get('/videos'); // Adjust the API endpoint as needed
            setVideos(response.data);
        };
        fetchVideos();
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredVideos = videos.filter(video => {
        const matchesTitle = video.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || video.Category === selectedCategory;
        return matchesTitle && matchesCategory;
    });

    return (
        <div>
            <header className="flex justify-between items-center p-4">
               <Link to="/ChannelPage"><h1 className="text-2xl">Video Library</h1></Link> 
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="border p-2"
                />
            </header>
            <div className="flex space-x-4 p-4">
                <button onClick={() => handleCategoryChange('All')} className="bg-gray-300 p-2">All</button>
                <button onClick={() => handleCategoryChange('CSS')} className="bg-gray-300 p-2">CSS</button>
                <button onClick={() => handleCategoryChange('JS')} className="bg-gray-300 p-2">JS</button>
                <button onClick={() => handleCategoryChange('React')} className="bg-gray-300 p-2">React</button>
            </div>
            <div className="grid grid-cols-3 gap-4 p-4">
                {filteredVideos.map(video => (
                    <div key={video.id} className="border p-4">
                        <img src={video.thumbnailUrl} alt={video.title} className="w-full h-40 object-cover" />
                      <Link to ="/video"> <h2 className="text-xl mt-2">{video.title}</h2> </Link>
                        <p className="text-gray-600">Channel: {video.channelId}</p>
                        <p className="text-gray-600">Views: {video.views}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;