
import './App.css';
import Navbar from '../navbar/Navbar';
import Login from '../login/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AddPets from '../add-pets/AddPets';
import SignupForm from '../singup/SignUp';
import DisplayPets from '../display-pets/DisplayPets';

function App() {
  return(
    
    <div className="App">
     

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/pets" element={<DisplayPets />} />
          <Route path="/home" element={<Navbar/>} />
          <Route path="/*" element={<Navigate to="/login" />} />
          <Route path="/addpet" element={<AddPets/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
