import './App.css';
import React from 'react';
import LoginForm from './Component/LoginForm';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ResourceForm from './Component/ResourceForm';
import { ResourceRequisition } from "./Component/ResourceRequisition";
import SavedData from './Component/SavedData';
import FormModal from './Component/FormModal';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/myresource' element={<ResourceForm />} />
          <Route path='/resource' element={<ResourceRequisition />} />
          <Route path='/saveddata' element={<SavedData />} />
          <Route path='/popup' element={<FormModal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
