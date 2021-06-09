import React, { Component } from 'react';

class User extends Component {
    componentWillUnmount(){
        alert('Este usuario fue eliminado')
    }
    render() {
        return (
            <div>
                Usuario: Mr.Pepe
            </div>
        );
    }
}

export default User;