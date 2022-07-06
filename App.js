import React, { Component } from 'react';
import DogList from './DogList';
import Breeds from './Breed'
// import logo from './logo.svg';
// import './App.css';




class App extends Component {

    // async componentDidMount(){
    //     const url="https://api.thedogapi.com/v1/breeds?api_key=af6f2d6f-7cd4-421e-8fd9-83188dd6e69b";
    //     const response= await fetch(url);
    //     const data= await response.json();
    //     console.log(data);
    //     this.setState({dogs: data[0].name, loading:false});
    // }


    render() { 
        const isBackgroundRed=true

        return (
            <div style={{textAlign:'center'}}>
                <Breeds />
            </div>
        );
    }
}
 

export default App;
