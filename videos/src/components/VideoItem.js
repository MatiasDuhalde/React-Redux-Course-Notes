import './VideoItem.css';
import React from 'react';

class VideoItem extends React.Component {
    render() {
        const { title, thumbnails } = this.props.video.snippet;
        const videoURL = `https://youtu.be/${this.props.video.id.videoId}`;
        return (
            <div className="video-item item">
                <img
                    className="ui image"
                    src={thumbnails.medium.url}
                    alt={title}
                />
                <div className="content">
                    <a className="Header" href={videoURL}>
                        {title}
                    </a>
                </div>
            </div>
        );
    }
}

export default VideoItem;
