// src/components/VideoPlayerPage.js
import React, { useState } from 'react';

// Sample data for the video
const sampleVideo = {
    videoId: "video01",
    title: "Learn React in 30 Minutes",
    description: "A quick tutorial to get started with React.",
    channelName: "Code with John",
    likes: 1023,
    dislikes: 45,
    comments: [
        {
            commentId: "comment01",
            userId: "user02",
            text: "Great video! Very helpful.",
        },
        {
            commentId: "comment02",
            userId: "user03",
            text: "Thanks for the tutorial!",
        },
    ],
};

const VideoPlayerPage = () => {
    const [video, setVideo] = useState(sampleVideo);
    const [newComment, setNewComment] = useState('');

    const handleAddComment = () => {
        const commentId = `comment${video.comments.length + 1}`;
        const newCommentObj = {
            commentId,
            userId: "user01", // Replace with the actual user ID
            text: newComment,
        };
        setVideo(prevVideo => ({
            ...prevVideo,
            comments: [...prevVideo.comments, newCommentObj],
        }));
        setNewComment('');
    };

    const handleDeleteComment = (commentId) => {
        setVideo(prevVideo => ({
            ...prevVideo,
            comments: prevVideo.comments.filter(comment => comment.commentId !== commentId),
        }));
    };

    return (
        <div className="video-player-page">
           <h1>{video.title}</h1>
            <video controls>
                <source src={`https://example.com/videos/${video.videoId}.mp4`} type="video/mp4" />
               
            </video>
            <p>{video.description}</p>
            <p>Channel: {video.channelName}</p>
            <div className="like-dislike-buttons">
                <button>👍 {video.likes}</button>
                <button>👎 {video.dislikes}</button>
            </div>
            <h2>Comments</h2>
            <div className="comments-section">
                {video.comments.map(comment => (
                    <div key={comment.commentId} className="comment">
                        <p>{comment.text}</p>
                        <button onClick={() => handleDeleteComment(comment.commentId)}>Delete</button>
                    </div>
                ))}
            </div>
            <div className="add-comment">
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                />
                <button onClick={handleAddComment}>Post Comment</button>
            </div>
        </div>
    );
};

export default VideoPlayerPage;