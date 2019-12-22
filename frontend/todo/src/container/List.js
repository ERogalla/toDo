import React from 'react';
import axios from 'axios';
import Message from '../components/Message'

class List extends React.Component {
    
    state = {
        tasks: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    tasks: res.data
                })
                console.log(res.data)
            })
    }

    render() {
        return( 
            <div>
                {this.state.tasks.map((val, key) => (
                    <Message data={val} key={key} />
                ))}
            </div>
        )
    }

}

export default List;