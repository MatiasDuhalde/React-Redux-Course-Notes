import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    const { title, thumbnails } = video.snippet;
    const videoURL = `https://youtu.be/${video.id.videoId}`;
    return (
        <div className="video-item item" onClick={() => onVideoSelect(video)}>
            <img className="ui image" src={thumbnails.medium.url} alt={title} />
            <div className="content">
                <div className="Header" href={videoURL}>
                    {title}
                </div>
            </div>
        </div>
    );
};

export default VideoItem;
