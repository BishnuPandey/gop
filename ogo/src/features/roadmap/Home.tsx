import { Routes, Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
 import {Roadmaps} from '../../features/roadmap/Roadmaps';
import {Roadmap, AddRoadmap, EditRoadmap} from '../../features/roadmap/Roadmap';


export function Home(){
return (     
      <Routes>
            <Route path='/' element={<Roadmaps/>} />
            <Route path='/roadmaps/:id' element={<Roadmap/>} />
            <Route path='/roadmaps/addRoadmap' element={<AddRoadmap/>} />
            <Route path='/roadmaps/editRoadmap/:id' element={<EditRoadmap/>} />
      </Routes>
)
}
export default Home;