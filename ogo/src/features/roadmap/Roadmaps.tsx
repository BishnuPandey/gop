//import { Console } from 'console';
import React, { useState, useEffect } from 'react';
//import {roadmaps} from './roadmap';
import axios from 'axios';
import './Roadmap.module.css';
import {NavLink} from 'react-router-dom';

export function Roadmaps() {
    const [roadmaps, setRoadmaps] = useState<any[]>([])
    useEffect( () => {
      axios.get('http://localhost:3000/api/v1/roadmaps/').then( (response) => 
      {
            setRoadmaps(response.data);
      }
      ).catch((error) =>{
          alert(error)
        })
    }, []);
 
    const listItems = roadmaps.map((r) => (
        <tr className="table-row" key={r.id}>
        <td className="title" id={'title'+r.id}>
          <NavLink to={'/roadmaps/'+r.id}>
            {r.title}
          </NavLink>
        </td>
        <td className="period" id={'period'+r.id}>{r.year} - {r.quarter}</td>
        <td className='status' id={'status'+r.id}>{r.status||"Draft"}</td>
        </tr>
       
    ));
    return <div id="roadmaps-list">
              <table className="table-wrapper"> 
              <caption>Roadmaps</caption>
                <thead>
                  <tr className="table-header" key="table-header">
                      <td className="title" id="title-head">Title</td>
                      <td className="period" id="period-head">Achieve BY</td>
                      <td className='status' id="status-head">Status</td>
                  </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
              </table>
            </div>
}


export default Roadmaps;