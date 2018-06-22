import React from 'react';

const SideBarVideoItem = (props) => {


    const handler = (event) => {
        props.clickedID(event.target.id)
    }

    return (
        <div className='videoItem row' >

            <div className='col-6'>
                <img src={props.image} onClick={handler} id={props.id} />
            </div>
            <div className='col-6'>
                <h6 onClick={handler} id={props.id}>{props.title}</h6>
            </div>

        </div>

    )
}

export default SideBarVideoItem;

