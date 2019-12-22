import React from 'react';

const CreateMessage = (props) => {
    return(
        <tr>
            <th>
                <form onSubmit={props.submit}>
                    <input type="text" name="message" />
                    <input type="submit" value="Submit" />
                </form>
            </th>
        </tr>
    )
}   

export default CreateMessage;