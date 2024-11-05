import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ChannelPage = () => {
    const { id } = useParams();
    const [channel, setChannel] = useState(null);

    useEffect(() => {
        const fetchChannel = async () => {
            const response = await axios.get(`/api/channels/${id}`); // Adjust the API endpoint as needed
            setChannel(response.data);
        };
        fetchChannel();
    }, [id]);

    if (!channel) return <div>Loading...</div>;

    return (
        <div>
            <h2>{channel.channelName}</h2>
            <p>{channel.description}</p>
            <h3>Videos</h3>
            <div className="video-grid">
                {channel.videos.map(video => (
                    <div key={video.videoId} className="video-card">
                        <h4>{video.title}</h4>
                        {/* Add thumbnail and link to video player */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChannelPage; 