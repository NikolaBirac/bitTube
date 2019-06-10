import React from 'react';

const SideBarVideoItem = (props) => {


    const handler = (event) => {
        props.clickedID(event.target.id)
    }

    return (
        <div className='videoItem row' style={{cursor:"pointer"}}>

            <div className='col-6 p-0'>
                <img src={props.image} onClick={handler} id={props.id} />
            </div>
            <div className='col-6'>
                <h6 onClick={handler} id={props.id}>{props.title}</h6>
            </div>

        </div>

    )
}

export default SideBarVideoItem;

