import React from 'react';
import VideoHistoryItem from './VideoHistoryItem';

const VideoHistory = (props) => {

    var videosString = localStorage.getItem('searchHistory')
    let videos = JSON.parse(videosString)


    return (
        <div className='col-12 col-sm-8 history'>
            <h5 className='col-sm-6'>History</h5>
            {(videos) ? videos.slice(1, videos.length).map(video => {
                return <VideoHistoryItem clickedID={props.clickedID} image={video.image} title={video.title} id={video.videoID} key={video.videoID} />
            }) : ''}
        </div>
    )

}

export default VideoHistory;