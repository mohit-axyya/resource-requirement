import './App.css';
import React from 'react';
import LoginForm from './Component/LoginForm';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ResourceForm from './Component/ResourceForm';
import { ResourceRequisition } from "./Component/ResourceRequisition";
import SavedData from './Component/SavedData';
import Popup from './Component/Popup';
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/myresource' element={<ResourceForm />} />
          <Route path='/resource' element={<ResourceRequisition />} />
          <Route path='/saveddata' element={<SavedData />} />
          <Route path='/popup' element={<Popup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
