import './App.css';
import MainContainer from './Components/Main-Container/MainContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Pages/Form/Form';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainContainer />}>
          <Route path='/home/form' element={<Form/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
