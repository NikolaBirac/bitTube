import React from 'react';
import Video from './Video';
import videoService from '../services/videoService';
import SearchBar from './SearchBar';
import SideBarVideos from './SideBarVideos';
import VideoHistory from './VideoHistory';

class FeedPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            video: [],
            videos: [],
            history: [],
            error: true
        }

        this.search = this.search.bind(this);
        this.playClicked = this.playClicked.bind(this);
    }

    loadVideo(searchVideo) {
        videoService.getVideo(searchVideo)
            .then(video => {
                let videoId = video.videoID;

                this.relatedVideos(videoId)
                let local = localStorage.getItem('searchHistory');

                let videoURL = 'https://www.youtube.com/embed/' + videoId;
                this.setState({
                    video: videoURL,
                    error: false
                }, () => {
                    if (!local) {
                        let videoHistoryArray = []
                        videoHistoryArray.push(video)
                        localStorage.setItem('searchHistory', JSON.stringify(videoHistoryArray))
                    } else {
                        local = localStorage.getItem('searchHistory')

                        if (!local.includes(JSON.stringify(video))) {
                            local = JSON.parse(local)
                            local.unshift(video)
                            local = local.slice(0, 7)
                            localStorage.setItem('searchHistory', JSON.stringify(local))
                        }
                    }
                }
                )
            })
            .catch(err => this.setState({
                error: true
            }));
    }

    relatedVideos(videoId) {
        videoService.getSuggestedVideo(videoId).then(videos => {
            this.setState({
                videos: videos
            })
        })
    }

    componentDidMount() {
        this.loadVideo()
    }

    search(input) {
        this.loadVideo(input)
    }

    playClicked(id) {
        this.loadVideo(id)
    }

    render() {
        return (
            <div>
                <SearchBar search={this.search} error={this.state.error} />
                <div className='container'>
                    <div className='row'>
                        <Video video={this.state.video} />
                        <SideBarVideos clickedID={this.playClicked} videos={this.state.videos} />
                        <VideoHistory clickedID={this.playClicked} />
                    </div>
                </div>
            </div>

        )
    }
}

export default FeedPage;