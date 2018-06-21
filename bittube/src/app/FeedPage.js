import React from 'react';
import Video from './Video';
import videoService from '../services/videoService';
import SearchBar from './SearchBar';
import SideBarVideos from './SideBarVideos';

class FeedPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            video: [],
            videos: []
            // videoID: ''
        }

        this.search = this.search.bind(this);
        this.playClicked = this.playClicked.bind(this);
    }

    loadVideo(searchVideo) {
        videoService.getVideo(searchVideo)
            .then(video => {
                let videoId = video.items[0].id.videoId;

                this.relatedVideos(videoId)

                let videoURL = 'https://www.youtube.com/embed/' + videoId;
                this.setState({
                    video: videoURL,
                    // videoID: videoId
                })
            })
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

            <div className='container'>
                <div className='row'>
                    <SearchBar search={this.search} />
                    <Video video={this.state.video} />
                    <SideBarVideos clickedID={this.playClicked} videos={this.state.videos} />
                </div>
            </div>

        )
    }
}

export default FeedPage;