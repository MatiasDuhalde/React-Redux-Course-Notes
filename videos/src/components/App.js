import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube';

class App extends React.Component {
    state = { videos: [] };

    onTermSubmit = async term => {
        if (!term) {
            this.setState({ videos: [] });
            return;
        }
        const response = await youtube.get('/search', {
            params: {
                q: term,
            },
        });

        this.setState({ videos: response.data.items });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;
