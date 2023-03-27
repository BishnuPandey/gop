 import React, { useState, useEffect } from 'react';
 import axios from 'axios';
 import { useParams } from "react-router-dom";
 import {NavLink} from 'react-router-dom';

export const AddRoadmap = () => {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [quarter, setQuarter] = useState("");
    const [message, setMessage] = useState("");
    const roadmapRaw = JSON.stringify({
                title: title,
                year: year,
                quarter: quarter
               });

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
               e.preventDefault();
               saveRoadmap(roadmapRaw);
            };

    const saveRoadmap = (roadmapRaw: any) => {
            //console.log(roadmapRaw)
              axios.post('http://localhost:3000/api/v1/roadmaps/', roadmapRaw, {
                headers: {
                            'Content-Type': 'application/json'
                          }}
              ).then( (response) => {
                if (response.status === 200) {
                    setTitle("");
                    setYear("");
                    setQuarter("");
                    setMessage("Roadmap item created successfully");
                    } else {
                    setMessage("Some error occured");
                  }
              }
              ).catch((error) =>{
                  console.log(error)
                })
    };

    return <div>
            <h2>Add roadmap</h2>
            <form onSubmit={handleSubmit}>
            <p>Title <input type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)} /></p>
            <p>Year <input type="text" id="year" name="year" onChange={(e) => setYear(e.target.value)} /></p>
            <p>Quarter <input type="text" id="quarter" name="quarter" onChange={(e) => setQuarter(e.target.value)} /></p>
            <p><input type="Submit" /> | <NavLink to="/">Back</NavLink> </p>
            <p color="red">{message ? message : null}</p>
            </form>
        </div>        
}

export const EditRoadmap = () => {
    return <div>Edit Page</div>
}

export const DeleteRoadmap = (id: any) => {
    axios.delete('http://localhost:3000/api/v1/roadmaps/'+id)
    .then( (response) => {
                console.log('Deleted successfully')
              }
              ).catch((error) =>{
                  console.log(error)
                  alert('Error - ')
                })
   
}

export function Roadmap(){
	const [roadmap, setRoadmap] = useState<any>([])
    const [message, setMessage] = useState("");
    const params = useParams();
	useEffect( () => {
      axios.get('http://localhost:3000/api/v1/roadmaps/'+params.id).then( (response) => 
      {
            //console.log(response.data);
            setRoadmap(response.data);
      }
      ).catch((error) =>{
          alert(error);
        })
   }, []);
    
	return <div><h2>Roadmap</h2>
    <span>{roadmap.title}</span><br />
    <span>{roadmap.year} - Q{roadmap.quarter}</span><br />
    <span>{roadmap.status}</span> <br />
    <NavLink to="/">Back</NavLink> | 
    <NavLink to="/roadmaps/addRoadmap">Add</NavLink> |
    <NavLink to={"/roadmaps/editRoadmap/"+roadmap.id}>Edit</NavLink> |
    <button onClick={()=>DeleteRoadmap(roadmap.id)}>Delete</button>
    <p color="red">{message ? message : null}</p>
    </div>
            
}

export default Roadmap;