import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import ProtectedLayout from './Components/ProtectedLayout/ProtectedLayout';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<ProtectedLayout/>}>
          <Route path="/" element={<Profile/>}></Route>
        </Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
