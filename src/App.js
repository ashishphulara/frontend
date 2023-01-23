// import logo from './logo.svg';
import React from "react";
import LandingPage from "./components/LandingPage/landing_page";
import MainPage from './components/main_page/main_page'
import Form from "./components/form/Form"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Showpost from "./components/showpost";
function App() {
  return (
    <div className="wrapper">
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<LandingPage/>}></Route>
     <Route path='/main_page' element={<MainPage/>}></Route>
     <Route path="/Form" element={<Form/>}></Route>
     <Route path="/view" element={<Showpost/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
