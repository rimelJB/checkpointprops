import React from 'react';

const Msg = (props)=> {
    return (
        <div>
            <button onClick={() => props.handle('Rimel Jabnoun')} 
            style={{marginLeft:"47%"}}> 
            CLICK
            </button>
        </div>
    )
}


export default Msg
