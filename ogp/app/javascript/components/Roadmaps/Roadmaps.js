import React, {useState, useEffect} from "react";
//import axios from "axios"

const Roadmaps = () => {
    // const [roadmaps, setRoadmaps] = useState([])
    // useEffect(() => {
    //     //get roadmaps
    //     axios.get('http://localhost:3000/api/v1/roadmaps.json')
    //     .then( resp => (console.log(resp)))
    //     .catch( resp => (console.log(resp)))
    // }, [])

    const element = React.createElement(
        'div',
        {className: 'roadmaps'},
        'Roadmaps Index'
      );
      return element;

};

 export default Roadmaps;
