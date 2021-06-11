import React, { Component } from 'react';

class FetchClassComponent extends Component {
    state = {
        data: null
    } 
    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then((response) => response.json())
        .then(res => {
            this.setState({ data: res.results });
        });
    }
    render() {
        return (
            <div>
            {this.state.data !== null ? (
              this.state.data.map((data, index) => {
                  return <p key={index} id={index}>{data.name}</p>
              })
            ) : (
              <h3>Cargada</h3>
            )}
          </div>
        );
    }
}

export default FetchClassComponent;

