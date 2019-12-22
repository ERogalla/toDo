import React from 'react';

const Message = (props) => {

    return(
        <div>
            <h1>{props.data.message}</h1>
        </div>
    )
}

export default Message;