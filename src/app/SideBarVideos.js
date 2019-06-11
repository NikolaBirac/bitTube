import React from 'react';
import SideBarVideoItem from './SideBarVideoItem';

const SideBarVideos = (props) => {

    return (
        <div className='col-12 col-lg-4 offset-lg-1 mt-5 mt-lg-0 padding'>
            <h5>Recommended</h5>
            <div className="row">
                {props.recommended.map(video => {
                    return <SideBarVideoItem clickedID={props.clickedID} id={video.videoID} title={video.title} image={video.image} key={video.videoID} />
                })}
            </div>

        </div>
    )




    // return (
    //     <div className='row col-12 col-lg-4 offset-1 justify-content-around'>
    //         <h5 className="col-12 text-center">Recommended</h5>
    //         {props.videos.map(video => {

    //             return <SideBarVideoItem clickedID={props.clickedID} id={video.videoID} title={video.title} image={video.image} key={video.videoID} />
    //         })}

    //     </div>
    // )
}

export default SideBarVideos;