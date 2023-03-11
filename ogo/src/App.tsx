import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
import { Roadmaps } from './features/roadmap/Roadmaps';
import { Home } from './features/roadmap/Home';


 function App() {
  return (
    <div className="App">
      <div id="header">My Priorities</div>
      <div className="container">
         <div id="qtop">
             <div id="roadmaps"><Home /></div>
             <div id="team_goals">team-goals</div>
         </div>
         <div id="qbottom">
             <div id="personal_goals">personal-goals</div>
             <div id="achievement">achievement</div>
         </div>
      </div>
      <div id="footer">Copyright@2022</div>
    </div>
  );
}

export default App;
