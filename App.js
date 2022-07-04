import React, { Component } from 'react';
import DogList from './DogList';
import logo from './logo.svg';
import './App.css';




class App extends Component {
    constructor(props){
        super(props);
        this.state={
            dogs :[]
        }
    }

    componentDidMount(){
        fetch("https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.setState({dogs:data})
            //console.log(dogs);
        })
    }

    render() { 
        return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {this.dogs[0]}
            </h1>
            {/* <ul>
              {this.state.dogs.map(dog=><li>{dog}</li>)}
            </ul> */}
            <DogList dogs={this.state.dogs}/>
        </div>
        );
    }
}
 

export default App;
