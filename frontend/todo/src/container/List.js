import React from 'react';
import axios from 'axios';
import Message from '../components/Message'
import CreateMessage from '../components/CreateMessage'

class List extends React.Component {

    constructor() {
        super();
        this.remove = this.remove.bind(this);
        this.submit = this.submit.bind(this);
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

    submit(event) {
        event.preventDefault();
        const message = event.target.elements.message.value;
        axios.post('http://127.0.0.1:8000/api/create/', {
            message: message,
        });
        this.componentDidMount();
    }

    render() {
        return( 
            <table>
                <tbody>
                    {this.state.tasks.map((val, i) => (
                        <Message data={val} key={i} remove={this.remove}/>
                    ))}
                    <CreateMessage submit={this.submit}/>
                </tbody>
            </table>
        )
    }

}

export default List;