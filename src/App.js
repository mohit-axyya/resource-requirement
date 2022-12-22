import './App.css';
import React from 'react';
import LoginForm from './Component/LoginForm';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ResourceForm from './Component/ResourceForm';
import { ResourceRequisition } from "./Component/ResourceRequisition";
import SaveData from './Component/SaveData';
import FormModal from './Component/FormModal';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.js';
import HomePage from './Component/HomePage';
import Aboutus from './Component/Aboutus';
import Signin from './Component/SigninForm';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/myresource' element={<ResourceForm />} />
          <Route path='/resource' element={<ResourceRequisition />} />
          <Route path='/saveddata' element={<SaveData />} />
          <Route path='/popup' element={<FormModal />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='*' element={<>PAGE NOT FOUND</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
