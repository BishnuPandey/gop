
import { Controller } from "@hotwired/stimulus";
import React from 'react';
import ReactDOM from 'react-dom';



import MyPriorities from "../components/MyPriorities";
import Roadmaps from "../components/Roadmaps/Roadmaps";

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("Connected to react controller");

    const e = React.createElement;
    const root = ReactDOM.createRoot(
      document.getElementById("header")
      );
    root.render(e(MyPriorities),root);

    const roadmaps = ReactDOM.createRoot(
      document.getElementById("roadmaps")
      );
    roadmaps.render(e(Roadmaps),roadmaps);
    //ReactDOM.render(<Roadmaps/>, roadmaps);
  }
}
