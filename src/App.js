import './App.css';
import Header from './pages/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Log from './pages/Log';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddAcount from './pages/AddAcount';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<AddAcount />} />
        <Route path='/log' element= {<Log />} />
        <Route path='/index' element ={<Header />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
