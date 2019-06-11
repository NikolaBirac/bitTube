import React from 'react';

const SideBarVideoItem = (props) => {


    const handler = (event) => {
        props.clickedID(event.target.id)
    }



    return (
        <div className='videoItem col-12 col-md-4 col-lg-12' style={{cursor:"pointer"}}>

            <div className="row">
                <div className='col-6 col-md-12 col-lg-6 p-0 mb-2 mb-lg-0'>
                    <img src={props.image} onClick={handler} id={props.id} alt={props.title}/>
                </div>
                <div className='col-6 col-md-12 col-lg-6'>
                    <h6 onClick={handler} id={props.id}>{props.title}</h6>
                </div>
            </div>

        </div>

    )





    // return (
    //     <div className='videoItem col-4 col-lg-12 row' style={{cursor:"pointer"}}>

    //         <div className='col-12 col-lg-6'>
    //             <div className="px-2"><img src={props.image} onClick={handler} id={props.id} /></div>
    //         </div>
    //         <div className='col-12 col-lg-6'>
    //             <div className="px-2"><h6 onClick={handler} id={props.id}>{props.title}</h6></div>
    //         </div>

    //     </div>

    // )
}

export default SideBarVideoItem;

