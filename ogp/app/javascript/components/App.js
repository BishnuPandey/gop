import React from "react"
import {Route,Switch} from "react-router-dom"

import Roadmaps from "./Roadmaps/Roadmaps"
import Roadmap from "./Roadmap/Roadmap"

const App = () => {
    return(
        <Switch>
            <Route exact path = "/roadmaps" component={Roadmaps}/>
            <Route exact path = "/roadmaps/:id" component={Roadmap}/>
        </Switch>
    )
}

export default App