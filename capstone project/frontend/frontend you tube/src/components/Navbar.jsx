
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent default form submission
        if (searchTerm.trim()) {
            // Redirect to search results page with the search term
            navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    {/* Dummy hamburger icon */}
                    <div className="h-6 w-6 text-gray-700 mr-4 cursor-pointer">
                        <div className="bg-gray-700 h-1 w-full mb-1"></div>
                        <div className="bg-gray-700 h-1 w-full mb-1"></div>
                        <div className="bg-gray-700 h-1 w-full"></div>
                    </div>
                    {/* Filled background YouTube icon with rectangular shape and border radius */}
                    <button className="bg-red-600 text-white p-2 hover:bg-red-700 mr-4 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10 15l11-6-11-6v12z" />
                        </svg>
                    </button>
                    <Link to="/" className="flex items-center">
                        <h1 className="text-black text-2xl font-bold">YouTube Clone</h1>
                    </Link>
                </div>
                <div className="flex-grow mx-4">
                    <form onSubmit={handleSearch}> {/* Add form for search */}
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
                            className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                    </form>
                </div>
                <div className="flex items-center space-x-4">
                    {/* Microphone icon */}
                    <button className="text-gray-700 hover:text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a2 2 0 100-4 2 2 0 000 4zm0 4a6 6 0 006-6V7a6 6 0 00-12 0v5a6 6 0 006 6z" />
                        </svg>
                    </button>
                    {/* Upload icon */}
                    <button className="text-gray-700 hover:text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16.5V21h18v-4.5M12 3v12m0 0l-3-3m3 3l3-3" />
                        </svg>
                    </button>
                    {/* Notification bell icon */}
                    <button className="text-gray-700 hover:text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.002 2.002 0 0018 14V10a6 6 0 00-12 0v4a2.002 2.002 0 00-.595 1.595L3 17h5m12 0a2 2 0 01-2 2H9a2 2 0 01-2-2" />
                        </svg>
                    </button>
                    {/* User profile icon (placeholder) */}
                    <button className="text-gray-700 hover:text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-4.42 0-8 2.58-8 6v1h16v-1c0-3.42-3.58-6-8-6z" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;