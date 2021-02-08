import React from 'react';

class VideoDetail extends React.Component {
    render() {
        if (!this.props.video) {
            return <div>Loading...</div>;
        }
        const { title, description } = this.props.video.snippet;
        const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
        return (
            <div>
                <div className="ui embed">
                    <iframe src={videoSrc} title="video player"></iframe>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        );
    }
}

export default VideoDetail;
