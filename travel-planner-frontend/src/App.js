import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import NavTop from './Components/Nav-top/NavTop';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />

      </Routes>
      
      </BrowserRouter>
      


    </div>
  );
}

export default App;
