import React, { Component } from 'react';
import DogList from './DogList';
import logo from './logo.svg';
import './App.css';




class App extends Component {
    constructor(props){
        super(props);
        this.state={
            loading: true,
            dogs :null,
            dogBreed:null
        }
    }

    async componentDidMount(){
        const url="https://api.thedogapi.com/v1/images/search?api_key=af6f2d6f-7cd4-421e-8fd9-83188dd6e69b";
        const response= await fetch(url);
        const data= await response.json();
        console.log(data);
        this.setState({dogs: data[0].url, loading:false, dogBreed:data[0].breeds[0]});
    }

    render() { 
        return (
        <div>
            <DogList dogs={this.state.dogs}/>
        </div>
        );
    }
}
 

export default App;
