import React from 'react';
import Video from './Video';
import videoService from '../services/videoService';

class FeedPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            video: []
        }
    }

    loadVideo() {
        videoService.getVideo('maya').then(video => {

            let videoId = video.items[0].id.videoId;
            let videoURL = 'https://www.youtube.com/embed/' + videoId;

            this.setState({
                video: videoURL
            })
        })
    }

    componentDidMount() {
        this.loadVideo()
    }

    render() {
        return (

            <div className='container'>
                <Video video={this.state.video} />
            </div>

        )
    }
}

export default FeedPage;