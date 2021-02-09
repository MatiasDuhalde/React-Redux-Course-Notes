import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onTermSubmit = async term => {
        if (!term) {
            setVideos([]);
            return;
        }
        const response = await youtube.get('/search', {
            params: {
                q: term,
            },
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };

    useEffect(() => {
        onTermSubmit('JavaScript');
    }, []);

    return (
        <div className="ui container">
            <SearchBar onSubmit={onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            videos={videos}
                            onVideoSelect={setSelectedVideo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
