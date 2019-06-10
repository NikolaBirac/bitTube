import axios from 'axios';
import { serviceURL, key } from '../shared/constants';
import Video from '../entities/Video';

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
            .then(response => {
                let video = response.items[0]
                return new Video(video.id.videoId, video.snippet.thumbnails.medium.url, video.snippet.title)
            }
            )
    }

    getSuggestedVideo(searchInput) {
        return axios.get(serviceURL, {
            params: {
                part: 'snippet',
                key: key,
                relatedToVideoId: searchInput,
                type: 'video'
            }
        }).then(response => response.data)
            .then(response => {
                let videos = response.items
                return videos.map(video => {
                    return new Video(video.id.videoId, video.snippet.thumbnails.medium.url, video.snippet.title)
                }
                )
            })

    }

}

export default new VideoService();
