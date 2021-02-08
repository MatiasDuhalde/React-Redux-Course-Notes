import axios from 'axios';

const KEY = 'AIzaSyANFN43rRAEkzjj0lymNdPnbyX6bjMhrRs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    },
});
