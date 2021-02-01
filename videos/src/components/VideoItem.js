import './VideoItem.css';
import React from 'react';

class VideoItem extends React.Component {
    render() {
        const { title, thumbnails } = this.props.video.snippet;
        const videoURL = `https://youtu.be/${this.props.video.id.videoId}`;
        return (
            <div
                className="video-item item"
                onClick={() => this.props.onVideoSelect(this.props.video)}
            >
                <img
                    className="ui image"
                    src={thumbnails.medium.url}
                    alt={title}
                />
                <div className="content">
                    <div className="Header" href={videoURL}>
                        {title}
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoItem;
