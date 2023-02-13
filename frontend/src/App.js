
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/footer';
import { Home } from './Components/Home';
import Login from './Components/Login/login';
import Navbar from './Components/Navbar/navbar';
import { ShowQuery } from './Components/Query/showQuery';

function App() {
  return (
    <div className="App">
         
         
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/query' element={<ShowQuery/>}/>
         </Routes>

    </div>
  );
}

export default App;
