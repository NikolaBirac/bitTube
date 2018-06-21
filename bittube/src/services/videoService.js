import axios from 'axios';
import { serviceURL, key } from '../shared/constants';

class VideoService {

    getVideo(searchInput) {
        return axios.get(serviceURL, {
            params: {
                part: 'snippet',
                key: key,
                q: searchInput,
                maxResults: 1
            }
        }).then(response => response.data)
    }
}

export default new VideoService(); //zasto new