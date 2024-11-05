import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VideoPlayer = () => {
    const { id } = useParams();
    const [video, setVideo] = useState(null);

    useEffect(() => {
        const fetchVideo = async () => {
            const response = await axios.get(`/api/videos/${id}`); // Adjust the API endpoint as needed
            setVideo(response.data);
        };
        fetchVideo();
    }, [id]);

    if (!video) return <div>Loading...</div>;

    return (
        <div>
            <h2>{video.title}</h2>
            <video controls>
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <p>{video.description}</p>
            <p>Uploaded by: {video.uploader}</p>
            <p>{video.views} views</p>
            {/* Add like/dislike buttons and comments section here */}
        </div>
    );
};

export default VideoPlayer; 