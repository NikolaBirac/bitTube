import React from 'react';

const Video = (props) => {

    return (
        <div className='col-12 col-lg-7 mainVideo'>
            <iframe width="420" height="345" src={props.video.video} frameBorder="0" title="video" allowFullScreen>
            </iframe>
            <h3 className="mainVideo__title">{props.video.title}</h3>
        </div>
    )
}

export default Video;