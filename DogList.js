import React from 'react';
import Dog from './Dog';

const DogList =(props) =>{

    const dogArrays= props.dogs.map((dogURL)=>{
        return <Dog url={dogURL}/>
    })

    return(
        <div className="child">
            {dogArrays}
        </div>
    )

}

export default Dog;