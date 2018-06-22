import React from 'react';
import VideoHistoryItem from './VideoHistoryItem';

const VideoHistory = (props) => {

    var videosString = localStorage.getItem('searchHistory')
    let videos = JSON.parse(videosString)


    return (
        <div>
            {(videos) ? videos.slice(1, videos.length).map(video => {
                return <VideoHistoryItem clickedID={props.clickedID} image={video.image} title={video.title} id={video.videoID} />
            }) : ''}
        </div>
    )

}

export default VideoHistory;