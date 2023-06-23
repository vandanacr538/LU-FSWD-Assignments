import './App.css';
import MainContainer from './Components/Main-Container/MainContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Pages/Form/Form';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContainer />}>
          <Route path='/form' element={<Form/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
