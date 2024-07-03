import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import NavTop from './Components/Nav-top/NavTop';
import Page1 from './Pages/Page1';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/page1' element={<Page1/>} />
      </Routes>
      
      </BrowserRouter>
      


    </div>
  );
}

export default App;
