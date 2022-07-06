import React,{useState, useEffect} from "react";
import axios from "axios";

const Breeds=()=>{
    const[breeds,setBreeds] = useState([]);
    const [images, setimages ] = useState([]);

    useEffect(()=>{
        axios.get("https://api.thedogapi.com/v1/breeds")
        .then((response)=>setBreeds(response.data));
    },[])

    let onChange=(x)=>{

        axios({
            url: "https://api.thedogapi.com/v1/images/search?limit=1&breed_id="+x,
            method: 'get',
            headers: {
                'api_key':'af6f2d6f-7cd4-421e-8fd9-83188dd6e69b',
                'Content-Type': 'application/json'
            }
         })
         .then((response) => setimages(response.data))
         

    }


    // const Details=(img)=>{
    //     return (
    //         <img style={{width:600, height:600}} src={img.url} />

    //     )
    // }

    return (
        <div>
        <div>
            <div style={{backgroundColor:'green'}}><h1>Select dog breed</h1></div>
        <select onChange={x=>onChange(x.target.value)}>
            {breeds.map((breeds) =>(
                <option key={breeds.id} value={breeds.id}>
                <h3>{breeds.name}</h3>
                </option>
            ))
                }
            
        </select>
        </div>
        <div><br/></div>
        <div>
        {
            images.map((img)=>(
                <img style={{width:600, height:600}} src={img.url} />
            ))

        }
        {/* <img style={{width:300, height:300}} src={images[0].url} /> */}
        </div>
        </div>
    )
}


export default Breeds;