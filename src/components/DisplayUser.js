import React, { Component } from 'react';
import User from './User'

class DisplayUser extends Component {
    constructor(){
        super()
        this.state={
            show : true
        }
    }
    eraseUser = (e) =>{
        this.setState({
            show:false
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.show ? <User/> : null
                }
                <button onClick={this.eraseUser}>Borrar usuario</button>
            </div>
        );
    }
}

export default DisplayUser;