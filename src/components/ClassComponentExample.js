import React, { Component } from 'react';

class ClassComponentExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
          myName: "React",
        };
      }
    componentDidMount() {
        console.log("ya fue montado el component");
      }
    componentDidUpdate(prevProps, prevState, snapshot) {
        //must go a condition
        if (this.state.name !== prevState) {
            console.log("el dato fue modificado");
        }
    }
      handelInput = (e) => {
        this.setState({
            myName: e.target.value
        })
    }
    render() {
        console.log('Ciclo de vida ->Render')
        return (
            <div>
                <h1>Hola</h1>
                <input onChange={this.handelInput}></input>
            </div>
        );
    }
}

export default ClassComponentExample;