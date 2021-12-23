import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <ToastContainer autoClose={4000} />
    <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/menu" element={<Menu/>}/>
         <Route path="/reservas" element={<Reservas />}/>
         <Route path="/registro" element={<Registro />}/>
    </Routes> 
    </BrowserRouter>
  );
}

export default App;

