
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Login from './pages/Login';
import DirectionMap from './components/DirectionMap';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path='/signin' element={<Login/>}/>
      <Route path='/directions' element={<DirectionMap/>}/>
     
      
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
