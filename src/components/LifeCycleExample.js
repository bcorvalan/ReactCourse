import React, { Component } from "react";

class LifeCycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myName: "React",
    };
  }
  componentDidMount() {
    console.log("ya fue montado el elemento");
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
    console.log("Ciclo de vida del render");
    return (
      <div>
        <input onChange={this.handelInput}></input>
      </div>
    );
  }
}

export default LifeCycleExample;
