import './App.css';
import MainContainer from './Components/Main-Container/MainContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Pages/Form/Form';
import Login from './Pages/Login/Login';
import HOC from './Pages/Login/HOC';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HOC Comp={Login}/>} />
        <Route path="/home" element={<MainContainer />}>
          <Route path='/home/form' element={<Form/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
