import React from 'react';

const Video = (props) => {

    return (
        <div className='col-7 mainVideo pr-0'>
            <iframe width="420" height="345" src={props.video} frameBorder="0" allowFullScreen>
            </iframe>
        </div>
    )
}

export default Video;