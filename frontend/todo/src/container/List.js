import React from 'react';
import axios from 'axios';
import Message from '../components/Message'

class List extends React.Component {

    constructor() {
        super();
        this.remove = this.remove.bind(this);
    }
    
    state = {
        tasks: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    tasks: res.data
                })
            })
    }

    remove(obj) {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => task !== obj )
        }));
        axios.delete(`http://127.0.0.1:8000/api/${obj.id}/delete/`);
    }


    render() {
        return( 
            <table>
                {this.state.tasks.map(val => (
                    <Message data={val}  remove={this.remove}/>
                ))}
            </table>
        )
    }

}

export default List;