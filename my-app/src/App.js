import { Route, Routes } from 'react-router-dom';
import Bar from './Components/Bar';
import Table1 from './Components/Table1';
import About from './Components/About';
import './App.css';
import Steve from './Components/Steve';
import Loading from './Components/Loading';
function App() {
  return (
    <div >
        <Routes>
          <Route path='/' element={<Bar />}/>
          {/* <Route path='/Bar' element={<Loading />}/> */}
          <Route path='/Steve' element={<Steve />}/>
          <Route path='/Home' element={<Table1 />}/>
          <Route path='About' element={<About />}/>
        </Routes>
    </div>
  );
}
export default App;