import React from 'react';
import SideBarVideoItem from './SideBarVideoItem';

const SideBarVideos = (props) => {


    return (
        <div className='col-4'>

            {props.videos.map(video => {

                return <SideBarVideoItem clickedID={props.clickedID} id={video.videoID} title={video.title} image={video.image} key={video.videoID} />
            })}

        </div>
    )
}

export default SideBarVideos;