import { Route, Routes } from 'react-router-dom';
import './App.css';
import Bar from './Components/Bar';
import Add from './Components/Add';
import Table1 from './Components/Table1';
function App() {
  return (
    <div className="App">
        <Bar />
        <Routes>
          <Route path='/Add' element={<Add />}/>
          <Route path='/Home' element={<Table1 />}/>
        </Routes>
    </div>
  );
}
export default App;