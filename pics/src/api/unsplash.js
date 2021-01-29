import axios from 'axios';

const unsplashAccessKey = 'o8ZlvK1DrvfXwl0lyWr-woxKie9ydRD9JStOqxoABN8';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${unsplashAccessKey}`,
    },
});
