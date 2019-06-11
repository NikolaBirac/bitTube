import React from 'react';

const VideoHistoryItem = (props) => {

    const handler = (event) => {
        props.clickedID(event.target.id)
    }

    return (
        <div className='row videoItem'>
            <div className='col-5 pl-0 pr-0'>
                <img src={props.image} onClick={handler} id={props.id} alt={props.title}/>
            </div>
            <div className='col-7 history__text'>
                <h6 onClick={handler} id={props.id}> {props.title}</h6>
            </div>
        </div>
    )
}

export default VideoHistoryItem;