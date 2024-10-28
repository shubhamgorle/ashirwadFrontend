import './App.css';
import InputForm from './components/InputForm';
import ShowData from './components/ShowData';
import Navbar from './components/Navbar';
import UpdateForm from './components/UpdateData';
import RinputForm from './rcomponents/RinputForm';
import RShowData from './rcomponents/RshowData';
import RupdateData from "./rcomponents/RupdateData"
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add/mendhepathar' element={<InputForm/>}/>
        <Route path='/show/mendhepathar' element={<ShowData/>}/>
        <Route path='/update/mendhepathar/:id' element={<UpdateForm/>}/>
        <Route path='/add/raulgaon' element={<RinputForm/>}/>
        <Route path='/show/raulgaon' element={<RShowData/>}/>
        <Route path='/update/raulgaon/:id' element={<RupdateData/>}/>
        <Route path='*' element={<NotFound/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
