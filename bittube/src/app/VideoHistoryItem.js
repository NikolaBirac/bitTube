import React from 'react';

const VideoHistoryItem = (props) => {

    const handler = (event) => {
        props.clickedID(event.target.id)
    }

    return (
        <div className='row videoItem'>
            <div className='col-3'>
                <img src={props.image} onClick={handler} id={props.id} />
            </div>
            <div className='col-3'>
                <h6 onClick={handler} id={props.id}> {props.title}</h6>
            </div>
        </div>
    )
}

export default VideoHistoryItem;