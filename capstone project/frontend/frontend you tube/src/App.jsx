import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import Auth from './components/Auth.jsx';
import VideoPlayer from './components/VideoPlayer.jsx';
import ChannelPage from './components/ChannelPage.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx'
const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/video" element={<VideoPlayer />} />
                <Route path="/channel" element={<ChannelPage />} />
            </Routes>
        </Router>
    );
};

export default App; 