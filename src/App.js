import { Route, Routes } from 'react-router-dom';
import Work from './pages/work';
import {About} from './pages/about.js';

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Work />}/>
      <Route path = 'about' element = {<About />} />
    </Routes>
  );
}

export default App;
