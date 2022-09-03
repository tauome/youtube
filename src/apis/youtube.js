import axios from "axios";

const KEY = 'AIzaSyCXD2jt5ygG8j9aFxfuo7zK6CM2WJK6x0Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video',
    }
}); 