import React from 'react';

class Message extends React.Component{
    render() {
        return(
            <tr>
                <th>{this.props.data.message}</th>
                <th>
                    <button type="button" onClick={this.props.remove.bind(this, this.props.data)}>Remove</button>
                </th>
            </tr>
        )
    }
}

export default Message;