import React, { Component } from 'react';
import DogList from './DogList';
import logo from './logo.svg';
import './App.css';




class App extends Component {
    state={
        loading:false,
        dogs:[],
        dogBreed:null
    };

    // async componentDidMount(){
    //     const url="https://api.thedogapi.com/v1/breeds?api_key=af6f2d6f-7cd4-421e-8fd9-83188dd6e69b";
    //     const response= await fetch(url);
    //     const data= await response.json();
    //     console.log(data);
    //     this.setState({dogs: data.name, loading:false});
    // }
    componentDidMount() {
        fetch(
"https://api.thedogapi.com/v1/breeds?api_key=af6f2d6f-7cd4-421e-8fd9-83188dd6e69b")
            .then((res) => res.json())
            .then((json) => {
                json.forEach(element=>{
                    const {name}=element
                    this.state.dogs.push({name: name})
                })
            })
    }

    render() { 
        const { loading, dogs} = this.state;
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  
            <h2>{dogs.name}</h2>
            <DogList dogs={this.state.dogs}/>
        </div>
        );
    }
}
 

export default App;
